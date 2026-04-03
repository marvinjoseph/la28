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

  // ===== Dropdown builders =====
  function buildDropdown(container, items, filterSet, onToggle) {
    container.innerHTML = items.map(item => {
      const checked = filterSet.has(item);
      return `<label class="filter-option" role="option" aria-selected="${checked}">
        <input type="checkbox" ${checked ? "checked" : ""} value="${escapeHtml(item)}">
        <span class="filter-option-label">${escapeHtml(item)}</span>
      </label>`;
    }).join("");

    container.querySelectorAll("input[type=checkbox]").forEach(cb => {
      cb.addEventListener("change", function () {
        onToggle(this.value, this.checked);
      });
    });
  }

  function setupDropdown(trigger, dropdown) {
    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains("open");
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
    document.querySelectorAll(".filter-dropdown.open").forEach(d => d.classList.remove("open"));
    document.querySelectorAll(".filter-trigger[aria-expanded='true']").forEach(t => t.setAttribute("aria-expanded", "false"));
  }

  // ===== Filtering =====
  function getFilteredData() {
    const searchLower = filters.search.toLowerCase().trim();
    const hasSport = filters.sports.size > 0;
    const hasStage = filters.stages.size > 0;
    const hasVenue = filters.venues.size > 0;
    const hasDateStart = filters.dateStart !== "";
    const hasDateEnd = filters.dateEnd !== "";
    const hasSearch = searchLower !== "";

    const hasAnyFilter = hasSport || hasStage || hasVenue || hasDateStart || hasDateEnd || hasSearch;
    if (!hasAnyFilter) return SCHEDULE_DATA.slice();

    if (filters.mode === "and") {
      return SCHEDULE_DATA.filter(function (s) {
        if (hasSport && !filters.sports.has(s.sport)) return false;
        if (hasStage && !filters.stages.has(s.type)) return false;
        if (hasVenue && !filters.venues.has(s.venue)) return false;
        if (hasDateStart && s.date < filters.dateStart) return false;
        if (hasDateEnd && s.date > filters.dateEnd) return false;
        if (hasSearch) {
          const haystack = (s.sport + " " + s.desc + " " + s.venue + " " + s.zone).toLowerCase();
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
        const inRange = (!hasDateStart || s.date >= filters.dateStart) && (!hasDateEnd || s.date <= filters.dateEnd);
        if (inRange) return true;
      }
      if (hasSearch) {
        const haystack = (s.sport + " " + s.desc + " " + s.venue + " " + s.zone).toLowerCase();
        if (haystack.includes(searchLower)) return true;
      }
      return false;
    });
  }

  // ===== Sorting =====
  function sortData(data) {
    const { key, dir } = currentSort;
    const mult = dir === "asc" ? 1 : -1;

    return data.sort(function (a, b) {
      let cmp = 0;
      if (key === "date") {
        cmp = a.date.localeCompare(b.date) || a.start.localeCompare(b.start);
      } else if (key === "time") {
        cmp = a.start.localeCompare(b.start) || a.date.localeCompare(b.date);
      } else if (key === "sport") {
        cmp = a.sport.localeCompare(b.sport);
      } else if (key === "stage") {
        const order = { Preliminary: 0, Quarterfinal: 1, Semifinal: 2, Final: 3 };
        cmp = (order[a.type] ?? 99) - (order[b.type] ?? 99);
      } else if (key === "venue") {
        cmp = a.venue.localeCompare(b.venue);
      }
      return cmp * mult;
    });
  }

  // ===== Rendering =====
  function render() {
    const filtered = getFilteredData();
    const sorted = sortData(filtered);
    const total = SCHEDULE_DATA.length;

    // Result count
    if (filtered.length === total) {
      els.resultCount.textContent = `${total} sessions`;
    } else {
      els.resultCount.textContent = `Showing ${filtered.length} of ${total} sessions`;
    }

    // Active filter count
    const activeCount = filters.sports.size + filters.stages.size + filters.venues.size +
      (filters.dateStart ? 1 : 0) + (filters.dateEnd ? 1 : 0) + (filters.search ? 1 : 0);
    els.clearBtn.style.display = activeCount > 0 ? "" : "none";

    // Sub-counts on triggers
    updateTriggerCount(els.sportCount, filters.sports.size);
    updateTriggerCount(els.stageCount, filters.stages.size);
    updateTriggerCount(els.venueCount, filters.venues.size);

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
      const emoji = SPORT_EMOJI[s.sport] || "\u{1F3C5}";
      const typeClass = s.type.toLowerCase();
      return `<tr>
        <td class="col-date">${formatBrowseDate(s.date)}</td>
        <td class="col-time">${formatBrowseTime(s.start)} &ndash; ${formatBrowseTime(s.end)}</td>
        <td class="col-sport"><span class="browse-sport-emoji" aria-hidden="true">${emoji}</span> ${escapeHtml(s.sport)}</td>
        <td class="col-desc">${escapeHtml(s.desc)}</td>
        <td class="col-stage"><span class="browse-badge badge-${typeClass}">${s.type}</span></td>
        <td class="col-venue">${escapeHtml(s.venue)}</td>
        <td class="col-zone">${escapeHtml(s.zone)}</td>
      </tr>`;
    }).join("");

    // Update sort arrows
    document.querySelectorAll(".sort-btn").forEach(function (btn) {
      const isActive = btn.dataset.sort === currentSort.key;
      btn.classList.toggle("active", isActive);
      const arrow = btn.querySelector(".sort-arrow");
      if (arrow) arrow.remove();
      if (isActive) {
        const span = document.createElement("span");
        span.className = "sort-arrow";
        span.innerHTML = currentSort.dir === "asc" ? " &darr;" : " &uarr;";
        btn.appendChild(span);
      }
    });
  }

  function updateTriggerCount(el, count) {
    if (count > 0) {
      el.textContent = count;
      el.style.display = "";
    } else {
      el.textContent = "";
      el.style.display = "none";
    }
  }

  // ===== Formatters =====
  function formatBrowseDate(dateStr) {
    const d = new Date(dateStr + "T12:00:00");
    return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  }

  function formatBrowseTime(t) {
    const [h, m] = t.split(":");
    const hour = parseInt(h);
    const ampm = hour >= 12 ? "PM" : "AM";
    const h12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return h12 + ":" + m + " " + ampm;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // ===== Clear =====
  function clearAllFilters() {
    filters.search = "";
    filters.sports.clear();
    filters.stages.clear();
    filters.venues.clear();
    filters.dateStart = "";
    filters.dateEnd = "";

    els.searchInput.value = "";
    els.dateStart.value = "";
    els.dateEnd.value = "";

    // Rebuild dropdowns to uncheck everything
    buildDropdown(els.sportDropdown, SPORTS, filters.sports, toggleSportFilter);
    buildDropdown(els.stageDropdown, allStages, filters.stages, toggleStageFilter);
    buildDropdown(els.venueDropdown, allVenues, filters.venues, toggleVenueFilter);

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

    // Build dropdowns
    buildDropdown(els.sportDropdown, SPORTS, filters.sports, toggleSportFilter);
    buildDropdown(els.stageDropdown, allStages, filters.stages, toggleStageFilter);
    buildDropdown(els.venueDropdown, allVenues, filters.venues, toggleVenueFilter);

    // Setup dropdown open/close
    setupDropdown(els.sportTrigger, els.sportDropdown);
    setupDropdown(els.stageTrigger, els.stageDropdown);
    setupDropdown(els.venueTrigger, els.venueDropdown);

    // Close dropdowns on outside click
    document.addEventListener("click", function () {
      closeAllDropdowns();
    });

    // Search
    let searchTimer;
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
        const key = this.dataset.sort;
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
