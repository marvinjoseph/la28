// Sport Emoji Map
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

// State
let selectedSports = [];
let stageSelections = {};
let genderSelections = {};

// Gender helpers
function detectGender(desc) {
  const lower = desc.toLowerCase();
  const hasMens = lower.includes("men's") || lower.includes("men\u2019s") || lower.includes("male");
  const hasWomens = lower.includes("women's") || lower.includes("women\u2019s") || lower.includes("female");
  if (hasMens && hasWomens) return "mixed";
  if (hasWomens) return "womens";
  if (hasMens) return "mens";
  return "mixed";
}

function sessionMatchesGender(session, genderFilter) {
  if (genderFilter === "all") return true;
  const gender = detectGender(session.desc);
  if (gender === "mixed") return true;
  return gender === genderFilter;
}

function getAvailableGenders(sessions) {
  const genders = new Set();
  for (const s of sessions) {
    const g = detectGender(s.desc);
    genders.add(g);
  }
  const result = [];
  if (genders.has("mens") || genders.has("mixed")) result.push("mens");
  if (genders.has("womens") || genders.has("mixed")) result.push("womens");
  return result.length >= 2 ? result : [];
}

// DOM refs (lazy — resolved when planner initializes)
let searchInput, selectedSportsEl, sportsGridEl, stepStages, stageSelectorsEl, findBtn, stepResults, resultsArea, startOverBtn;
let plannerInitialized = false;

function initPlanner() {
  if (plannerInitialized) return;
  plannerInitialized = true;

  searchInput = document.getElementById("sport-search");
  selectedSportsEl = document.getElementById("selected-sports");
  sportsGridEl = document.getElementById("sports-grid");
  stepStages = document.getElementById("step-stages");
  stageSelectorsEl = document.getElementById("stage-selectors");
  findBtn = document.getElementById("find-schedules-btn");
  stepResults = document.getElementById("step-results");
  resultsArea = document.getElementById("results-area");
  startOverBtn = document.getElementById("start-over-btn");

  renderSportsGrid();
  searchInput.addEventListener("input", handleSearch);
  findBtn.addEventListener("click", findSchedules);
  startOverBtn.addEventListener("click", startOver);
}

// Render Sports Grid
function renderSportsGrid(filter = "") {
  const lowerFilter = filter.toLowerCase();
  const html = SPORTS
    .filter(s => !filter || s.toLowerCase().includes(lowerFilter))
    .map(sport => {
      const sessions = SCHEDULE_DATA.filter(d => d.sport === sport);
      const isSelected = selectedSports.includes(sport);
      const isDisabled = !isSelected && selectedSports.length >= 3;
      const emoji = SPORT_EMOJI[sport] || "\u{1F3C5}";
      return `
        <div class="sport-card ${isSelected ? "selected" : ""} ${isDisabled ? "disabled" : ""}"
             role="button" tabindex="${isDisabled ? -1 : 0}"
             aria-pressed="${isSelected}"
             data-sport="${sport}"
             onclick="toggleSport('${sport.replace(/'/g, "\\'")}')"
             onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleSport('${sport.replace(/'/g, "\\'")}');}">
          <span class="sport-emoji" aria-hidden="true">${emoji}</span>
          <div>
            <div class="sport-name">${sport}</div>
            <div class="sport-sessions">${sessions.length} session${sessions.length !== 1 ? "s" : ""}</div>
          </div>
        </div>
      `;
    })
    .join("");
  sportsGridEl.innerHTML = html || '<p style="color: var(--text-3); padding: 16px;">No sports match your search.</p>';
}

// Toggle Sport Selection
function toggleSport(sport) {
  const idx = selectedSports.indexOf(sport);
  if (idx >= 0) {
    selectedSports.splice(idx, 1);
    delete stageSelections[sport];
    delete genderSelections[sport];
  } else if (selectedSports.length < 3) {
    selectedSports.push(sport);
  }
  update();
}

// Update UI
function update() {
  renderSportsGrid(searchInput.value);
  renderSelectedPills();
  renderStageSelectors();
  updateFindButton();

  stepStages.classList.toggle("hidden", selectedSports.length === 0);
  stepResults.classList.add("hidden");
}

function renderSelectedPills() {
  selectedSportsEl.innerHTML = selectedSports
    .map(sport => {
      const emoji = SPORT_EMOJI[sport] || "\u{1F3C5}";
      return `
        <span class="sport-pill">
          ${emoji} ${sport}
          <button class="remove-pill" aria-label="Remove ${sport}" onclick="toggleSport('${sport.replace(/'/g, "\\'")}')">&times;</button>
        </span>
      `;
    })
    .join("");
}

function renderStageSelectors() {
  stageSelectorsEl.innerHTML = selectedSports
    .map(sport => {
      const sessions = SCHEDULE_DATA.filter(d => d.sport === sport);
      const genderFilter = genderSelections[sport] || "all";
      const filteredSessions = sessions.filter(s => sessionMatchesGender(s, genderFilter));
      const types = [...new Set(filteredSessions.map(s => s.type))].sort((a, b) => {
        const order = { Preliminary: 0, Quarterfinal: 1, Semifinal: 2, Final: 3 };
        return (order[a] ?? 99) - (order[b] ?? 99);
      });
      const emoji = SPORT_EMOJI[sport] || "\u{1F3C5}";
      const selectedStage = stageSelections[sport];
      const availableGenders = getAvailableGenders(sessions);

      if (selectedStage && !types.includes(selectedStage)) {
        delete stageSelections[sport];
      }

      const genderToggle = availableGenders.length >= 2 ? `
        <div class="gender-toggle">
          <button class="gender-btn ${genderFilter === "all" ? "active" : ""}"
                  onclick="selectGender('${sport.replace(/'/g, "\\'")}', 'all')">All</button>
          <button class="gender-btn mens ${genderFilter === "mens" ? "active" : ""}"
                  onclick="selectGender('${sport.replace(/'/g, "\\'")}', 'mens')">Men's</button>
          <button class="gender-btn womens ${genderFilter === "womens" ? "active" : ""}"
                  onclick="selectGender('${sport.replace(/'/g, "\\'")}', 'womens')">Women's</button>
        </div>
      ` : "";

      return `
        <div class="stage-card">
          <div class="stage-card-header">
            <span class="sport-emoji">${emoji}</span>
            <h3>${sport}</h3>
          </div>
          ${genderToggle}
          <div class="stage-label">Stage</div>
          <div class="stage-options">
            ${types.map(t => {
              const count = filteredSessions.filter(s => s.type === t).length;
              const isActive = stageSelections[sport] === t;
              return `<button class="stage-btn ${isActive ? "active" : ""}"
                        onclick="selectStage('${sport.replace(/'/g, "\\'")}', '${t}')">
                        ${t}<span class="count">(${count})</span>
                      </button>`;
            }).join("")}
          </div>
        </div>
      `;
    })
    .join("");
}

function selectGender(sport, gender) {
  genderSelections[sport] = gender;
  const sessions = SCHEDULE_DATA.filter(d => d.sport === sport);
  const filtered = sessions.filter(s => sessionMatchesGender(s, gender));
  const types = [...new Set(filtered.map(s => s.type))];
  if (stageSelections[sport] && !types.includes(stageSelections[sport])) {
    delete stageSelections[sport];
  }
  renderStageSelectors();
  updateFindButton();
}

function selectStage(sport, type) {
  stageSelections[sport] = type;
  renderStageSelectors();
  updateFindButton();
}

function updateFindButton() {
  const allSelected = selectedSports.length >= 1 &&
    selectedSports.every(s => stageSelections[s]);
  findBtn.disabled = !allSelected;
}

// Handle Search
function handleSearch() {
  renderSportsGrid(searchInput.value);
}

// Find Schedules
function findSchedules() {
  const sportSessions = selectedSports.map(sport => {
    const genderFilter = genderSelections[sport] || "all";
    return {
      sport,
      stage: stageSelections[sport],
      gender: genderFilter,
      sessions: SCHEDULE_DATA.filter(d =>
        d.sport === sport &&
        d.type === stageSelections[sport] &&
        sessionMatchesGender(d, genderFilter)
      )
    };
  });

  const combos = findValidCombinations(sportSessions);

  renderResults(combos, sportSessions);
  stepResults.classList.remove("hidden");
  stepResults.scrollIntoView({ behavior: "smooth", block: "start" });
}

function findValidCombinations(sportSessions) {
  if (sportSessions.length === 0) return [];

  const sessionArrays = sportSessions.map(s => s.sessions);
  const allCombos = cartesian(sessionArrays);
  const validCombos = [];

  for (const combo of allCombos) {
    const dates = combo.map(s => new Date(s.date + "T00:00:00"));
    const minDate = new Date(Math.min(...dates));
    const maxDate = new Date(Math.max(...dates));
    const daySpan = Math.round((maxDate - minDate) / (1000 * 60 * 60 * 24)) + 1;

    if (daySpan > 5) continue;
    if (hasTimeConflict(combo)) continue;

    validCombos.push({
      sessions: combo,
      daySpan,
      minDate: combo.map(s => s.date).sort()[0],
      maxDate: combo.map(s => s.date).sort().pop()
    });
  }

  validCombos.sort((a, b) => a.daySpan - b.daySpan || a.minDate.localeCompare(b.minDate));

  const seen = new Set();
  const deduped = [];
  for (const c of validCombos) {
    const key = c.sessions.map(s => s.code).sort().join(",");
    if (!seen.has(key)) {
      seen.add(key);
      deduped.push(c);
    }
  }

  return deduped.slice(0, 20);
}

function cartesian(arrays) {
  if (arrays.length === 0) return [[]];
  if (arrays.length === 1) return arrays[0].map(item => [item]);

  const results = [];
  const rest = cartesian(arrays.slice(1));

  for (const item of arrays[0]) {
    for (const r of rest) {
      results.push([item, ...r]);
    }
  }

  if (results.length > 50000) return results.slice(0, 50000);
  return results;
}

function hasTimeConflict(sessions) {
  const byDate = {};
  for (const s of sessions) {
    if (!byDate[s.date]) byDate[s.date] = [];
    byDate[s.date].push(s);
  }

  for (const date in byDate) {
    const day = byDate[date];
    for (let i = 0; i < day.length; i++) {
      for (let j = i + 1; j < day.length; j++) {
        if (timesOverlap(day[i], day[j])) return true;
      }
    }
  }
  return false;
}

function timesOverlap(a, b) {
  const aStart = timeToMinutes(a.start);
  const aEnd = timeToMinutes(a.end);
  const bStart = timeToMinutes(b.start);
  const bEnd = timeToMinutes(b.end);
  return aStart < bEnd && bStart < aEnd;
}

function timeToMinutes(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

// Render Results
function renderResults(combos, sportSessions) {
  if (combos.length === 0) {
    resultsArea.innerHTML = `
      <div class="no-results">
        <h3>No compatible schedules found</h3>
        <p>Try different stages or different sports. Some combinations don't fit within a 3-5 day window, or have time conflicts.</p>
      </div>
    `;
    return;
  }

  resultsArea.innerHTML = combos.map((combo, idx) => {
    const byDate = {};
    for (const s of combo.sessions) {
      if (!byDate[s.date]) byDate[s.date] = [];
      byDate[s.date].push(s);
    }

    const sortedDates = Object.keys(byDate).sort();

    const startStr = formatDate(sortedDates[0]);
    const endStr = formatDate(sortedDates[sortedDates.length - 1]);
    const rangeLabel = sortedDates.length === 1 ? startStr : `${startStr} \u2013 ${endStr}`;

    return `
      <div class="schedule-option">
        <div class="schedule-option-header">
          <h3>Option ${idx + 1}</h3>
          <div>
            <span class="schedule-date-range">${rangeLabel}</span>
            <span class="schedule-days-label">${combo.daySpan} day${combo.daySpan > 1 ? "s" : ""}</span>
          </div>
        </div>
        <div class="schedule-timeline">
          ${sortedDates.map(date => {
            const events = byDate[date].sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));
            return `
              <div class="timeline-day">
                <div class="timeline-day-label">${formatDayLabel(date)}</div>
                <div class="timeline-events">
                  ${events.map(ev => renderEvent(ev)).join("")}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }).join("");
}

function renderEvent(ev) {
  const emoji = SPORT_EMOJI[ev.sport] || "\u{1F3C5}";
  const typeClass = ev.type.toLowerCase();
  return `
    <div class="timeline-event type-${typeClass}">
      <div class="event-time">
        <span class="start">${formatTime(ev.start)}</span>
        <span class="dash">\u2013</span>
        <span class="end">${formatTime(ev.end)}</span>
      </div>
      <div class="event-details">
        <div class="event-sport">${emoji} ${ev.sport}</div>
        <div class="event-desc">${ev.desc}</div>
        <div class="event-venue">${ev.venue} \u00B7 ${ev.zone}</div>
      </div>
      <span class="event-badge badge-${typeClass}">${ev.type}</span>
    </div>
  `;
}

function formatDate(dateStr) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function formatDayLabel(dateStr) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });
}

function formatTime(t) {
  const [h, m] = t.split(":");
  const hour = parseInt(h);
  const ampm = hour >= 12 ? "PM" : "AM";
  const h12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  return `${h12}:${m} ${ampm}`;
}

// Start Over
function startOver() {
  selectedSports = [];
  stageSelections = {};
  genderSelections = {};
  searchInput.value = "";
  update();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== Navigation / View Switching =====
function initNav() {
  const tabs = document.querySelectorAll(".nav-tab");
  const viewBrowse = document.getElementById("view-browse");
  const viewPlanner = document.getElementById("view-planner");

  function switchView(viewName) {
    if (viewName === "browse") {
      viewBrowse.style.display = "";
      viewPlanner.style.display = "none";
      tabs.forEach(t => {
        const isActive = t.dataset.view === "browse";
        t.classList.toggle("active", isActive);
        t.setAttribute("aria-selected", isActive);
      });
      if (typeof initBrowse === "function") initBrowse();
    } else {
      viewBrowse.style.display = "none";
      viewPlanner.style.display = "";
      tabs.forEach(t => {
        const isActive = t.dataset.view === "planner";
        t.classList.toggle("active", isActive);
        t.setAttribute("aria-selected", isActive);
      });
      initPlanner();
    }
    window.scrollTo({ top: 0 });
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", function(e) {
      e.preventDefault();
      const view = this.dataset.view;
      window.location.hash = view;
      switchView(view);
    });
  });

  // Handle initial hash
  function handleHash() {
    const hash = window.location.hash.replace("#", "");
    if (hash === "planner") {
      switchView("planner");
    } else {
      switchView("browse");
    }
  }

  window.addEventListener("hashchange", handleHash);
  handleHash();
}

// Defer nav init until all scripts (including browse.js) have loaded.
// Called from index.html after the last <script> tag.
