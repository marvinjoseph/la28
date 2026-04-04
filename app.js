// Shared: Sport Emoji Map
const SPORT_EMOJI = {
  "3x3 Basketball": "\u{1F3C0}", "Archery": "\u{1F3F9}", "Artistic Gymnastics": "\u{1F938}",
  "Artistic Swimming": "\u{1F3CA}", "Athletics (Track & Field)": "\u{1F3C3}",
  "Athletics (Race Walk)": "\u{1F6B6}", "Athletics (Marathon)": "\u{1F3C3}",
  "Badminton": "\u{1F3F8}", "Baseball": "\u26BE", "Basketball": "\u{1F3C0}",
  "Beach Volleyball": "\u{1F3D0}", "BMX Freestyle": "\u{1F6B2}", "BMX Racing": "\u{1F6B2}",
  "Boxing": "\u{1F94A}", "Canoe Slalom": "\u{1F6F6}", "Canoe Sprint": "\u{1F6F6}",
  "Climbing": "\u{1F9D7}", "Cricket": "\u{1F3CF}", "Cycling Road (Time Trial)": "\u{1F6B4}",
  "Cycling Road (Road Race)": "\u{1F6B4}", "Cycling Track": "\u{1F6B4}",
  "Diving": "\u{1F3CA}", "Equestrian": "\u{1F40E}", "Fencing": "\u{1F93A}",
  "Flag Football": "\u{1F3C8}", "Football (Soccer)": "\u26BD", "Golf": "\u26F3",
  "Handball": "\u{1F93E}", "Hockey": "\u{1F3D1}", "Judo": "\u{1F94B}", "Lacrosse": "\u{1F94D}",
  "Modern Pentathlon": "\u{1F3BD}", "Mountain Bike": "\u{1F6B5}",
  "Open Water Swimming": "\u{1F30A}", "Rhythmic Gymnastics": "\u{1F938}",
  "Rowing": "\u{1F6A3}", "Rugby Sevens": "\u{1F3C9}",
  "Sailing (Windsurfing & Kite)": "\u26F5",
  "Sailing (Dinghy, Skiff & Multihull)": "\u26F5",
  "Shooting (Rifle & Pistol)": "\u{1F3AF}", "Shooting (Shotgun)": "\u{1F3AF}",
  "Skateboarding (Street)": "\u{1F6F9}", "Skateboarding (Park)": "\u{1F6F9}",
  "Squash": "\u{1F3BE}", "Surfing": "\u{1F3C4}", "Swimming": "\u{1F3CA}",
  "Table Tennis": "\u{1F3D3}", "Taekwondo": "\u{1F94B}", "Tennis": "\u{1F3BE}",
  "Trampoline Gymnastics": "\u{1F938}", "Triathlon": "\u{1F3C3}", "Volleyball": "\u{1F3D0}",
  "Water Polo": "\u{1F93D}", "Weightlifting": "\u{1F3CB}", "Wrestling": "\u{1F93C}",
};

// Shared: Gender helpers
function detectGender(desc) {
  var lower = desc.toLowerCase();
  var hasMens = lower.includes("men's") || lower.includes("men\u2019s");
  var hasWomens = lower.includes("women's") || lower.includes("women\u2019s");
  if (hasMens && hasWomens) return "mixed";
  if (hasWomens) return "womens";
  if (hasMens) return "mens";
  return "mixed";
}

function sessionMatchesGender(session, genderFilter) {
  if (genderFilter === "all") return true;
  var gender = detectGender(session.desc);
  if (gender === "mixed") return true;
  return gender === genderFilter;
}

// Shared: date helpers
function computeDateRange() {
  var dates = SCHEDULE_DATA.map(function (s) { return s.date; });
  return { min: dates.sort()[0], max: dates.sort().pop() };
}

function formatDate(dateStr) {
  var d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function formatDayLabel(dateStr) {
  var d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });
}

function formatTime(t) {
  if (!t || t === "TBD") return "TBD";
  var parts = t.split(":");
  var hour = parseInt(parts[0]);
  var m = parts[1];
  var ampm = hour >= 12 ? "PM" : "AM";
  var h12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  return h12 + ":" + m + " " + ampm;
}

function timeToMinutes(t) {
  if (!t || t === "TBD") return Number.POSITIVE_INFINITY;
  var parts = t.split(":").map(Number);
  return parts[0] * 60 + parts[1];
}

// =============================================
// PLANNER VIEW
// =============================================
(function () {
  var initialized = false;
  var els = {};

  // State
  var selectedSports = [];
  var genderFilter = "all";
  var stageFilters = new Set(); // empty = all
  var dateStart = "";
  var dateEnd = "";
  var hideTbd = true;

  window.initPlanner = function () {
    if (initialized) return;
    initialized = true;

    var range = computeDateRange();

    els.searchInput = document.getElementById("planner-sport-search");
    els.selectedSports = document.getElementById("planner-selected-sports");
    els.sportsGrid = document.getElementById("planner-sports-grid");
    els.genderToggle = document.getElementById("planner-gender-toggle");
    els.stageToggle = document.getElementById("planner-stage-toggle");
    els.dateStart = document.getElementById("planner-date-start");
    els.dateEnd = document.getElementById("planner-date-end");
    els.hideTbd = document.getElementById("planner-hide-tbd");
    els.summary = document.getElementById("planner-summary");
    els.timeline = document.getElementById("planner-timeline");
    els.results = document.getElementById("planner-results");
    els.resetBtn = document.getElementById("planner-reset-btn");

    // Set date defaults and bounds
    els.dateStart.min = range.min;
    els.dateStart.max = range.max;
    els.dateStart.value = range.min;
    els.dateEnd.min = range.min;
    els.dateEnd.max = range.max;
    els.dateEnd.value = range.max;
    dateStart = range.min;
    dateEnd = range.max;

    // Events
    els.searchInput.addEventListener("input", function () {
      renderSportsGrid(els.searchInput.value);
    });

    els.dateStart.addEventListener("change", function () {
      dateStart = this.value;
      renderTimeline();
    });
    els.dateEnd.addEventListener("change", function () {
      dateEnd = this.value;
      renderTimeline();
    });

    if (els.hideTbd) {
      els.hideTbd.checked = hideTbd;
      els.hideTbd.addEventListener("change", function () {
        hideTbd = this.checked;
        renderTimeline();
      });
    }

    // Gender toggle
    els.genderToggle.addEventListener("click", function (e) {
      var btn = e.target.closest(".gender-btn");
      if (!btn) return;
      genderFilter = btn.dataset.value;
      els.genderToggle.querySelectorAll(".gender-btn").forEach(function (b) {
        b.classList.toggle("active", b.dataset.value === genderFilter);
      });
      renderTimeline();
    });

    // Stage toggle (multi-select; "all" clears others, others clear "all")
    els.stageToggle.addEventListener("click", function (e) {
      var btn = e.target.closest(".stage-btn");
      if (!btn) return;
      var val = btn.dataset.value;
      if (val === "all") {
        stageFilters.clear();
        els.stageToggle.querySelectorAll(".stage-btn").forEach(function (b) {
          b.classList.toggle("active", b.dataset.value === "all");
        });
      } else {
        // Toggle this stage
        if (stageFilters.has(val)) {
          stageFilters.delete(val);
        } else {
          stageFilters.add(val);
        }
        // If none selected, revert to "all"
        if (stageFilters.size === 0) {
          els.stageToggle.querySelectorAll(".stage-btn").forEach(function (b) {
            b.classList.toggle("active", b.dataset.value === "all");
          });
        } else {
          els.stageToggle.querySelectorAll(".stage-btn").forEach(function (b) {
            if (b.dataset.value === "all") {
              b.classList.remove("active");
            } else {
              b.classList.toggle("active", stageFilters.has(b.dataset.value));
            }
          });
        }
      }
      renderTimeline();
    });

    // Reset
    els.resetBtn.addEventListener("click", function () {
      selectedSports = [];
      genderFilter = "all";
      stageFilters.clear();
      dateStart = range.min;
      dateEnd = range.max;
      hideTbd = true;
      els.dateStart.value = range.min;
      els.dateEnd.value = range.max;
      if (els.hideTbd) els.hideTbd.checked = true;
      els.searchInput.value = "";
      els.genderToggle.querySelectorAll(".gender-btn").forEach(function (b) {
        b.classList.toggle("active", b.dataset.value === "all");
      });
      els.stageToggle.querySelectorAll(".stage-btn").forEach(function (b) {
        b.classList.toggle("active", b.dataset.value === "all");
      });
      renderSportsGrid("");
      renderPills();
      renderTimeline();
    });

    renderSportsGrid("");
    renderTimeline();
  };

  // Expose togglePlannerSport globally for onclick
  window.togglePlannerSport = function (sport) {
    var idx = selectedSports.indexOf(sport);
    if (idx >= 0) {
      selectedSports.splice(idx, 1);
    } else {
      selectedSports.push(sport);
    }
    renderSportsGrid(els.searchInput.value);
    renderPills();
    renderTimeline();
  };

  function renderSportsGrid(filter) {
    var lowerFilter = (filter || "").toLowerCase();
    var html = SPORTS
      .filter(function (s) { return !lowerFilter || s.toLowerCase().includes(lowerFilter); })
      .map(function (sport) {
        var sessions = SCHEDULE_DATA.filter(function (d) { return d.sport === sport; });
        var isSelected = selectedSports.includes(sport);
        var emoji = SPORT_EMOJI[sport] || "\u{1F3C5}";
        return '<div class="sport-card ' + (isSelected ? "selected" : "") + '"'
          + ' role="button" tabindex="0"'
          + ' aria-pressed="' + isSelected + '"'
          + " onclick=\"togglePlannerSport('" + sport.replace(/'/g, "\\'") + "')\""
          + " onkeydown=\"if(event.key==='Enter'||event.key===' '){event.preventDefault();togglePlannerSport('" + sport.replace(/'/g, "\\'") + "');}\">"
          + '<span class="sport-emoji" aria-hidden="true">' + emoji + '</span>'
          + '<div>'
          + '<div class="sport-name">' + sport + '</div>'
          + '<div class="sport-sessions">' + sessions.length + ' session' + (sessions.length !== 1 ? 's' : '') + '</div>'
          + '</div></div>';
      })
      .join("");
    els.sportsGrid.innerHTML = html || '<p style="color: var(--text-3); padding: 16px;">No sports match your search.</p>';
  }

  function renderPills() {
    els.selectedSports.innerHTML = selectedSports
      .map(function (sport) {
        var emoji = SPORT_EMOJI[sport] || "\u{1F3C5}";
        return '<span class="sport-pill">'
          + emoji + ' ' + sport
          + ' <button class="remove-pill" aria-label="Remove ' + sport + '"'
          + " onclick=\"togglePlannerSport('" + sport.replace(/'/g, "\\'") + "')\">&times;</button>"
          + '</span>';
      })
      .join("");
  }

  function getFilteredSessions() {
    return SCHEDULE_DATA.filter(function (s) {
      // Sport filter
      if (selectedSports.length > 0 && !selectedSports.includes(s.sport)) return false;
      // Gender filter
      if (!sessionMatchesGender(s, genderFilter)) return false;
      // Stage filter
      if (stageFilters.size > 0 && !stageFilters.has(s.type)) return false;
      // Date filter
      if (dateStart && s.date < dateStart) return false;
      if (dateEnd && s.date > dateEnd) return false;
      if (hideTbd && (s.start === "TBD" || s.end === "TBD")) return false;
      return true;
    });
  }

  function renderTimeline() {
    var sessions = getFilteredSessions();

    // Show/hide reset
    var hasFilters = selectedSports.length > 0 || genderFilter !== "all" || stageFilters.size > 0;
    els.resetBtn.style.display = hasFilters ? "" : "none";

    // Summary
    var summaryParts = [];
    summaryParts.push(sessions.length + " session" + (sessions.length !== 1 ? "s" : ""));
    if (selectedSports.length > 0) {
      summaryParts.push(selectedSports.length + " sport" + (selectedSports.length !== 1 ? "s" : ""));
    }
    var uniqueDays = new Set(sessions.map(function (s) { return s.date; }));
    summaryParts.push(uniqueDays.size + " day" + (uniqueDays.size !== 1 ? "s" : ""));
    els.summary.textContent = summaryParts.join(" \u00B7 ");

    if (sessions.length === 0) {
      els.timeline.innerHTML = '<div class="no-results">'
        + '<h3>No sessions match</h3>'
        + '<p>Try adding more sports, broadening your date range, or selecting different stages.</p>'
        + '</div>';
      return;
    }

    // Group by date
    var byDate = {};
    sessions.forEach(function (s) {
      if (!byDate[s.date]) byDate[s.date] = [];
      byDate[s.date].push(s);
    });

    var sortedDates = Object.keys(byDate).sort();

    els.timeline.innerHTML = sortedDates.map(function (date) {
      var events = byDate[date].sort(function (a, b) {
        return timeToMinutes(a.start) - timeToMinutes(b.start);
      });

      // Check for time conflicts
      var conflicts = findConflicts(events);

      return '<div class="timeline-day">'
        + '<div class="timeline-day-label">' + formatDayLabel(date)
        + ' <span class="day-count">' + events.length + ' session' + (events.length !== 1 ? 's' : '') + '</span>'
        + '</div>'
        + '<div class="timeline-events">'
        + events.map(function (ev) { return renderTimelineEvent(ev, conflicts); }).join("")
        + '</div></div>';
    }).join("");
  }

  function findConflicts(events) {
    var conflictSet = new Set();
    for (var i = 0; i < events.length; i++) {
      for (var j = i + 1; j < events.length; j++) {
        var aStart = timeToMinutes(events[i].start);
        var aEnd = timeToMinutes(events[i].end);
        var bStart = timeToMinutes(events[j].start);
        var bEnd = timeToMinutes(events[j].end);
        if (!isFinite(aStart) || !isFinite(aEnd) || !isFinite(bStart) || !isFinite(bEnd)) {
          continue;
        }
        if (aStart < bEnd && bStart < aEnd) {
          conflictSet.add(events[i].code);
          conflictSet.add(events[j].code);
        }
      }
    }
    return conflictSet;
  }

  function renderTimelineEvent(ev, conflicts) {
    var emoji = SPORT_EMOJI[ev.sport] || "\u{1F3C5}";
    var typeClass = ev.type.toLowerCase();
    var hasConflict = conflicts.has(ev.code);
    return '<div class="timeline-event type-' + typeClass + (hasConflict ? ' has-conflict' : '') + '">'
      + '<div class="event-time">'
      + '<span class="start">' + formatTime(ev.start) + '</span>'
      + '<span class="dash">\u2013</span>'
      + '<span class="end">' + formatTime(ev.end) + '</span>'
      + '</div>'
      + '<div class="event-details">'
      + '<div class="event-sport">' + emoji + ' ' + ev.sport + '</div>'
      + '<div class="event-desc">' + ev.desc + '</div>'
      + '<div class="event-venue">' + ev.venue + ' \u00B7 ' + ev.zone + '</div>'
      + '</div>'
      + '<span class="event-badge badge-' + typeClass + '">' + ev.type + '</span>'
      + (hasConflict ? '<span class="conflict-indicator" title="Overlaps with another session">Overlap</span>' : '')
      + '</div>';
  }
})();

// =============================================
// NAVIGATION
// =============================================
function initNav() {
  var tabs = document.querySelectorAll(".nav-tab");
  var viewBrowse = document.getElementById("view-browse");
  var viewPlanner = document.getElementById("view-planner");

  function switchView(viewName) {
    if (viewName === "browse") {
      viewBrowse.style.display = "";
      viewPlanner.style.display = "none";
      tabs.forEach(function (t) {
        var isActive = t.dataset.view === "browse";
        t.classList.toggle("active", isActive);
        t.setAttribute("aria-selected", isActive);
      });
      if (typeof initBrowse === "function") initBrowse();
    } else {
      viewBrowse.style.display = "none";
      viewPlanner.style.display = "";
      tabs.forEach(function (t) {
        var isActive = t.dataset.view === "planner";
        t.classList.toggle("active", isActive);
        t.setAttribute("aria-selected", isActive);
      });
      initPlanner();
    }
    window.scrollTo({ top: 0 });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (e) {
      e.preventDefault();
      var view = this.dataset.view;
      window.location.hash = view;
      switchView(view);
    });
  });

  function handleHash() {
    var hash = window.location.hash.replace("#", "");
    switchView(hash === "planner" ? "planner" : "browse");
  }

  window.addEventListener("hashchange", handleHash);
  handleHash();
}
