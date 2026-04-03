// Browse view — filterable table of all sessions
(function () {
  "use strict";

  let browseInitialized = false;

  // Filter state
  const filters = {
    search: "",
    sports: new Set(),
    stages: new Set(),
    venues: new Set(),
    dateStart: "",
    dateEnd: "",
    mode: "and" // "and" or "or"
  };

  let currentSort = { key: "date", dir: "asc" };

  // Derived data
  const allVenues = [...new Set(SCHEDULE_DATA.map(s => s.venue))].sort();
  const allStages = ["Preliminary", "Quarterfinal", "Semifinal", "Final"];

  // Compute min/max dates from data
  const allDates = SCHEDULE_DATA.map(s => s.date);
  const minDate = allDates.reduce(function (a, b) { return a < b ? a : b; });
  const maxDate = allDates.reduce(function (a, b) { return a > b ? a : b; });

  // DOM refs
  let els = {};

  function initBrowseDOM() {
    els = {
      searchInput: document.getElementById("browse-search"),
      tbody: document.getElementById("browse-tbody"),
      resultCount: document.getElementById("result-count"),
      clearBtn: document.getElementById("clear-filters"),
      emptyState: document.getElementById("browse-empty"),
      table: document.getElementById("browse-table"),
      dateStart: document.getElementById("browse-date-start"),
      dateEnd: document.getElementById("browse-date-end"),
      sportTrigger: document.getElementById("filter-sport-trigger"),
      sportDropdown: document.getElementById("filter-sport-dropdown"),
      sportCount: document.getElementById("filter-sport-count"),
      stageTrigger: document.getElementById("filter-stage-trigger"),
      stageDropdown: document.getElementById("filter-stage-dropdown"),
      stageCount: document.getElementById("filter-stage-count"),
      venueTrigger: document.getElementById("filter-venue-trigger"),
      venueDropdown: document.getElementById("filter-venue-dropdown"),
      venueCount: document.getElementById("filter-venue-count"),
      modeAnd: document.getElementById("mode-and"),
      modeOr: document.getElementById("mode-or"),
    };
  }

  // ===== Cascading / constrained options =====
  // Returns the set of valid values for a given filter key,
  // considering ALL other active filters (but not the filter itself).
  function getConstrainedOptions(filterKey) {
    var searchLower = filters.search.toLowerCase().trim();
    var hasSport = filterKey !== "sports" && filters.sports.size > 0;
    var hasStage = filterKey !== "stages" && filters.stages.size > 0;
    var hasVenue = filterKey !== "venues" && filters.venues.size > 0;
    var hasDateStart = filters.dateStart !== "";
    var hasDateEnd = filters.dateEnd !== "";
    var hasSearch = searchLower !== "";

    // Filter SCHEDULE_DATA by all OTHER active filters
    var subset = SCHEDULE_DATA.filter(function (s) {
      if (hasSport && !filters.sports.has(s.sport)) return false;
      if (hasStage && !filters.stages.has(s.type)) return false;
      if (hasVenue && !filters.venues.has(s.venue)) return false;
      if (hasDateStart && s.date < filters.dateStart) return false;
      if (hasDateEnd && s.date > filters.dateEnd) return false;
      if (hasSearch) {
        var haystack = (s.sport + " " + s.desc + " " + s.venue + " " + s.zone).toLowerCase();
        if (!haystack.includes(searchLower)) return false;
      }
      return true;
    });

    // Extract the valid values for the requested filter
    if (filterKey === "sports") {
      return new Set(subset.map(function (s) { return s.sport; }));
    }
    if (filterKey === "stages") {
      return new Set(subset.map(function (s) { return s.type; }));
    }
    if (filterKey === "venues") {
      return new Set(subset.map(function (s) { return s.venue; }));
    }
    return new Set();
  }

  // ===== Dropdown builders =====
  function buildDropdown(container, items, filterSet, onToggle, constrainedSet) {
    // Only show items that are available OR already checked
    var visibleItems = items.filter(function (item) {
      var available = constrainedSet ? constrainedSet.has(item) : true;
      return available || filterSet.has(item);
    });
    container.innerHTML = visibleItems.map(function (item) {
      var checked = filterSet.has(item);
      return '<label class="filter-option" role="option" aria-selected="' + checked + '">' +
        '<input type="checkbox" ' + (checked ? "checked" : "") + ' value="' + escapeHtml(item) + '">' +
        '<span class="filter-option-label">' + escapeHtml(item) + '</span>' +
      '</label>';
    }).join("");

    container.querySelectorAll("input[type=checkbox]").forEach(function (cb) {
      cb.addEventListener("change", function () {
        onToggle(this.value, this.checked);
      });
    });
  }

  function setupDropdown(trigger, dropdown) {
    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      // Don't toggle if user clicked a pill remove button
      if (e.target.closest(".filter-pill-remove")) return;
      var isOpen = dropdown.classList.contains("open");
      closeAllDropdowns();
      if (!isOpen) {
        dropdown.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });

    trigger.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        trigger.click();
      }
    });
  }

  function closeAllDropdowns() {
    document.querySelectorAll(".filter-dropdown.open").forEach(function (d) { d.classList.remove("open"); });
    document.querySelectorAll(".filter-trigger[aria-expanded='true']").forEach(function (t) { t.setAttribute("aria-expanded", "false"); });
  }

  // ===== Trigger pill rendering =====
  function renderTriggerPills(trigger, label, filterSet, onRemove) {
    // Find existing pills container or the label span
    var labelSpan = trigger.querySelector(".filter-trigger-label");
    var pillsContainer = trigger.querySelector(".filter-trigger-pills");
    var countSpan = trigger.querySelector(".filter-trigger-count");
    var chevron = trigger.querySelector(".filter-chevron");

    // Remove old pills container if exists
    if (pillsContainer) {
      pillsContainer.remove();
    }

    if (filterSet.size === 0) {
      // Show plain label, hide count
      labelSpan.textContent = label;
      labelSpan.style.display = "";
      countSpan.style.display = "none";
      countSpan.textContent = "";
      return;
    }

    // Show label with colon
    labelSpan.textContent = label + ":";
    labelSpan.style.display = "";

    // Hide old count badge
    countSpan.style.display = "none";
    countSpan.textContent = "";

    // Create pills container
    pillsContainer = document.createElement("span");
    pillsContainer.className = "filter-trigger-pills";

    var items = Array.from(filterSet);
    var maxShow = 2;
    var showItems = items.length > 3 ? items.slice(0, maxShow) : items;
    var remaining = items.length > 3 ? items.length - maxShow : 0;

    showItems.forEach(function (item) {
      var pill = document.createElement("span");
      pill.className = "filter-pill";
      pill.textContent = item;

      var removeBtn = document.createElement("button");
      removeBtn.className = "filter-pill-remove";
      removeBtn.type = "button";
      removeBtn.innerHTML = "&times;";
      removeBtn.setAttribute("aria-label", "Remove " + item);
      removeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        onRemove(item);
      });

      pill.appendChild(removeBtn);
      pillsContainer.appendChild(pill);
    });

    if (remaining > 0) {
      var moreSpan = document.createElement("span");
      moreSpan.className = "filter-pill-more";
      moreSpan.textContent = "+" + remaining + " more";
      pillsContainer.appendChild(moreSpan);
    }

    // Insert pills before the chevron
    trigger.insertBefore(pillsContainer, chevron);
  }

  // ===== Filtering =====
  function getFilteredData() {
    var searchLower = filters.search.toLowerCase().trim();
    var hasSport = filters.sports.size > 0;
    var hasStage = filters.stages.size > 0;
    var hasVenue = filters.venues.size > 0;
    var hasDateStart = filters.dateStart !== "";
    var hasDateEnd = filters.dateEnd !== "";
    var hasSearch = searchLower !== "";

    var hasAnyFilter = hasSport || hasStage || hasVenue || hasDateStart || hasDateEnd || hasSearch;
    if (!hasAnyFilter) return SCHEDULE_DATA.slice();

    if (filters.mode === "and") {
      return SCHEDULE_DATA.filter(function (s) {
        if (hasSport && !filters.sports.has(s.sport)) return false;
        if (hasStage && !filters.stages.has(s.type)) return false;
        if (hasVenue && !filters.venues.has(s.venue)) return false;
        if (hasDateStart && s.date < filters.dateStart) return false;
        if (hasDateEnd && s.date > filters.dateEnd) return false;
        if (hasSearch) {
          var haystack = (s.sport + " " + s.desc + " " + s.venue + " " + s.zone).toLowerCase();
          if (!haystack.includes(searchLower)) return false;
        }
        return true;
      });
    }

    // OR mode: session matches if it passes ANY active filter group
    return SCHEDULE_DATA.filter(function (s) {
      if (hasSport && filters.sports.has(s.sport)) return true;
      if (hasStage && filters.stages.has(s.type)) return true;
      if (hasVenue && filters.venues.has(s.venue)) return true;
      if (hasDateStart || hasDateEnd) {
        var inRange = (!hasDateStart || s.date >= filters.dateStart) && (!hasDateEnd || s.date <= filters.dateEnd);
        if (inRange) return true;
      }
      if (hasSearch) {
        var haystack = (s.sport + " " + s.desc + " " + s.venue + " " + s.zone).toLowerCase();
        if (haystack.includes(searchLower)) return true;
      }
      return false;
    });
  }

  // ===== Sorting =====
  function sortData(data) {
    var key = currentSort.key;
    var dir = currentSort.dir;
    var mult = dir === "asc" ? 1 : -1;

    return data.sort(function (a, b) {
      var cmp = 0;
      if (key === "date") {
        cmp = a.date.localeCompare(b.date) || a.start.localeCompare(b.start);
      } else if (key === "time") {
        cmp = a.start.localeCompare(b.start) || a.date.localeCompare(b.date);
      } else if (key === "sport") {
        cmp = a.sport.localeCompare(b.sport);
      } else if (key === "stage") {
        var order = { Preliminary: 0, Quarterfinal: 1, Semifinal: 2, Final: 3 };
        cmp = (order[a.type] ?? 99) - (order[b.type] ?? 99);
      } else if (key === "venue") {
        cmp = a.venue.localeCompare(b.venue);
      }
      return cmp * mult;
    });
  }

  // ===== Rendering =====
  function render() {
    var filtered = getFilteredData();
    var sorted = sortData(filtered);
    var total = SCHEDULE_DATA.length;

    // Result count
    if (filtered.length === total) {
      els.resultCount.textContent = total + " sessions";
    } else {
      els.resultCount.textContent = "Showing " + filtered.length + " of " + total + " sessions";
    }

    // Active filter count
    var activeCount = filters.sports.size + filters.stages.size + filters.venues.size +
      (filters.dateStart !== minDate ? (filters.dateStart ? 1 : 0) : 0) +
      (filters.dateEnd !== maxDate ? (filters.dateEnd ? 1 : 0) : 0) +
      (filters.search ? 1 : 0);
    els.clearBtn.style.display = activeCount > 0 ? "" : "none";

    // Compute constrained options for each dropdown
    var constrainedSports = getConstrainedOptions("sports");
    var constrainedStages = getConstrainedOptions("stages");
    var constrainedVenues = getConstrainedOptions("venues");

    // Rebuild dropdowns with constrained options (dims unavailable items)
    buildDropdown(els.sportDropdown, SPORTS, filters.sports, toggleSportFilter, constrainedSports);
    buildDropdown(els.stageDropdown, allStages, filters.stages, toggleStageFilter, constrainedStages);
    buildDropdown(els.venueDropdown, allVenues, filters.venues, toggleVenueFilter, constrainedVenues);

    // Render pills on trigger buttons
    renderTriggerPills(els.sportTrigger, "Sport", filters.sports, function (item) {
      filters.sports.delete(item);
      render();
    });
    renderTriggerPills(els.stageTrigger, "Stage", filters.stages, function (item) {
      filters.stages.delete(item);
      render();
    });
    renderTriggerPills(els.venueTrigger, "Venue", filters.venues, function (item) {
      filters.venues.delete(item);
      render();
    });

    // Empty state
    if (sorted.length === 0) {
      els.table.style.display = "none";
      els.emptyState.style.display = "";
      return;
    }
    els.table.style.display = "";
    els.emptyState.style.display = "none";

    // Build rows
    els.tbody.innerHTML = sorted.map(function (s) {
      var emoji = SPORT_EMOJI[s.sport] || "\u{1F3C5}";
      var typeClass = s.type.toLowerCase();
      return '<tr>' +
        '<td class="col-date">' + formatBrowseDate(s.date) + '</td>' +
        '<td class="col-time">' + formatBrowseTime(s.start) + ' &ndash; ' + formatBrowseTime(s.end) + '</td>' +
        '<td class="col-sport"><span class="browse-sport-emoji" aria-hidden="true">' + emoji + '</span> ' + escapeHtml(s.sport) + '</td>' +
        '<td class="col-desc">' + escapeHtml(s.desc) + '</td>' +
        '<td class="col-stage"><span class="browse-badge badge-' + typeClass + '">' + s.type + '</span></td>' +
        '<td class="col-venue">' + escapeHtml(s.venue) + '</td>' +
        '<td class="col-zone">' + escapeHtml(s.zone) + '</td>' +
      '</tr>';
    }).join("");

    // Update sort arrows
    document.querySelectorAll(".sort-btn").forEach(function (btn) {
      var isActive = btn.dataset.sort === currentSort.key;
      btn.classList.toggle("active", isActive);
      var arrow = btn.querySelector(".sort-arrow");
      if (arrow) arrow.remove();
      if (isActive) {
        var span = document.createElement("span");
        span.className = "sort-arrow";
        span.innerHTML = currentSort.dir === "asc" ? " &darr;" : " &uarr;";
        btn.appendChild(span);
      }
    });
  }

  // ===== Formatters =====
  function formatBrowseDate(dateStr) {
    var d = new Date(dateStr + "T12:00:00");
    return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  }

  function formatBrowseTime(t) {
    var parts = t.split(":");
    var h = parts[0];
    var m = parts[1];
    var hour = parseInt(h);
    var ampm = hour >= 12 ? "PM" : "AM";
    var h12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return h12 + ":" + m + " " + ampm;
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // ===== Clear =====
  function clearAllFilters() {
    filters.search = "";
    filters.sports.clear();
    filters.stages.clear();
    filters.venues.clear();
    filters.dateStart = minDate;
    filters.dateEnd = maxDate;

    els.searchInput.value = "";
    els.dateStart.value = minDate;
    els.dateEnd.value = maxDate;

    render();
  }

  // ===== Filter toggles =====
  function toggleSportFilter(value, checked) {
    if (checked) { filters.sports.add(value); } else { filters.sports.delete(value); }
    render();
  }

  function toggleStageFilter(value, checked) {
    if (checked) { filters.stages.add(value); } else { filters.stages.delete(value); }
    render();
  }

  function toggleVenueFilter(value, checked) {
    if (checked) { filters.venues.add(value); } else { filters.venues.delete(value); }
    render();
  }

  // ===== Init =====
  window.initBrowse = function () {
    if (browseInitialized) return;
    browseInitialized = true;

    initBrowseDOM();

    // Set default date range from data
    filters.dateStart = minDate;
    filters.dateEnd = maxDate;
    els.dateStart.value = minDate;
    els.dateEnd.value = maxDate;

    // Build dropdowns (with initial constrained options — all available at start)
    buildDropdown(els.sportDropdown, SPORTS, filters.sports, toggleSportFilter, null);
    buildDropdown(els.stageDropdown, allStages, filters.stages, toggleStageFilter, null);
    buildDropdown(els.venueDropdown, allVenues, filters.venues, toggleVenueFilter, null);

    // Setup dropdown open/close
    setupDropdown(els.sportTrigger, els.sportDropdown);
    setupDropdown(els.stageTrigger, els.stageDropdown);
    setupDropdown(els.venueTrigger, els.venueDropdown);

    // Close dropdowns on outside click
    document.addEventListener("click", function () {
      closeAllDropdowns();
    });

    // Search
    var searchTimer;
    els.searchInput.addEventListener("input", function () {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(function () {
        filters.search = els.searchInput.value;
        render();
      }, 150);
    });

    // Date range
    els.dateStart.addEventListener("change", function () {
      filters.dateStart = this.value;
      render();
    });
    els.dateEnd.addEventListener("change", function () {
      filters.dateEnd = this.value;
      render();
    });

    // AND/OR mode
    els.modeAnd.addEventListener("click", function () {
      filters.mode = "and";
      els.modeAnd.classList.add("active");
      els.modeAnd.setAttribute("aria-pressed", "true");
      els.modeOr.classList.remove("active");
      els.modeOr.setAttribute("aria-pressed", "false");
      render();
    });
    els.modeOr.addEventListener("click", function () {
      filters.mode = "or";
      els.modeOr.classList.add("active");
      els.modeOr.setAttribute("aria-pressed", "true");
      els.modeAnd.classList.remove("active");
      els.modeAnd.setAttribute("aria-pressed", "false");
      render();
    });

    // Clear all
    els.clearBtn.addEventListener("click", clearAllFilters);

    // Sort
    document.querySelectorAll(".sort-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var key = this.dataset.sort;
        if (currentSort.key === key) {
          currentSort.dir = currentSort.dir === "asc" ? "desc" : "asc";
        } else {
          currentSort.key = key;
          currentSort.dir = "asc";
        }
        render();
      });
    });

    // Initial render
    render();
  };
})();
