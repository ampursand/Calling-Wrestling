(function () {
  const storageKey = "calling-it-state-v1";
  const themeKey = "calling-it-theme";
  const databaseSeedVersionKey = "calling-it-database-seed-version";
  const databaseSeedVersion = "2026-05-21-companies-shows-split";
  let activeTheme = localStorage.getItem(themeKey) || "light";

  const showColors = {
    Dynamite: "show-Dynamite",
    Collision: "show-Collision",
    "All In": "show-All-In",
    "All Out": "show-All-Out",
    Revolution: "show-Revolution",
    "Forbidden Door": "show-Forbidden-Door",
    "Double or Nothing": "show-Double-or-Nothing",
    "Full Gear": "show-Full-Gear",
    WrestleDream: "show-WrestleDream",
    "World's End": "show-Worlds-End",
    Smackdown: "show-Smackdown",
    Backlash: "show-Backlash"
  };

  const seedState = {
    players: [
      { id: "player-harri", name: "Harri" },
      { id: "player-guest", name: "Guest" }
    ],
    companies: [
      { id: "company-aew", name: "AEW", notes: "Imported from Company Database" },
      { id: "company-roh", name: "ROH", notes: "Imported from Company Database" },
      { id: "company-njpw", name: "NJPW", notes: "Imported from Company Database" },
      { id: "company-wwe", name: "WWE", notes: "Imported from Company Database" }
    ],
    shows: [
      { id: "show-all-in", name: "All In", company: "AEW", type: "PPV", notes: "34 occurrences" },
      { id: "show-all-out", name: "All Out", company: "AEW", type: "PPV", notes: "36 occurrences" },
      { id: "show-backlash", name: "Backlash", company: "WWE", type: "PPV", notes: "5 occurrences" },
      { id: "show-battle-of-the-belts", name: "Battle of the Belts", company: "AEW", type: "TV", notes: "13 occurrences" },
      { id: "show-collision", name: "Collision", company: "AEW", type: "TV", notes: "644 occurrences" },
      { id: "show-dynasty", name: "DYNASTY", company: "AEW", type: "PPV", notes: "31 occurrences" },
      { id: "show-death-before-dishonor", name: "Death Before Dishonor", company: "ROH", type: "PPV", notes: "13 occurrences" },
      { id: "show-double-or-nothing", name: "Double or Nothing", company: "AEW", type: "PPV", notes: "21 occurrences" },
      { id: "show-dynamite", name: "Dynamite", company: "AEW", type: "TV", notes: "674 occurrences" },
      { id: "show-elimination-chamber", name: "Elimination Chamber", company: "WWE", type: "PPV", notes: "4 occurrences" },
      { id: "show-final-battle", name: "Final Battle", company: "ROH", type: "PPV", notes: "15 occurrences" },
      { id: "show-forbidden-door", name: "Forbidden Door", company: "AEW/NJPW", type: "PPV", notes: "29 occurrences" },
      { id: "show-full-gear", name: "Full Gear", company: "AEW", type: "PPV", notes: "36 occurrences" },
      { id: "show-global-wars-uk", name: "Global Wars UK", company: "ROH", type: "PPV", notes: "7 occurrences" },
      { id: "show-njpw-dontaku", name: "NJPW Dontaku", company: "NJPW", type: "PPV", notes: "9 occurrences" },
      { id: "show-rampage", name: "Rampage", company: "AEW", type: "TV", notes: "64 occurrences" },
      { id: "show-raw", name: "Raw", company: "WWE", type: "TV", notes: "23 occurrences" },
      { id: "show-revolution", name: "Revolution", company: "AEW", type: "PPV", notes: "25 occurrences" },
      { id: "show-ring-of-honor", name: "Ring of Honor", company: "ROH", type: "TV", notes: "73 occurrences" },
      { id: "show-royal-rumble", name: "Royal Rumble", company: "WWE", type: "PPV", notes: "20 occurrences" },
      { id: "show-saturday-night-main-event", name: "Saturday Night Main Event", company: "WWE", type: "TV", notes: "8 occurrences" },
      { id: "show-smackdown", name: "Smackdown", company: "WWE", type: "TV", notes: "1 occurrence" },
      { id: "show-summerslam", name: "SummerSlam", company: "WWE", type: "PPV", notes: "8 occurrences" },
      { id: "show-worlds-end", name: "World's End", company: "AEW", type: "PPV", notes: "34 occurrences" },
      { id: "show-wrestledream", name: "WrestleDream", company: "AEW", type: "PPV", notes: "26 occurrences" },
      { id: "show-wrestlekingdom", name: "WrestleKingdom", company: "NJPW", type: "PPV", notes: "19 occurrences" },
      { id: "show-wrestlemania", name: "Wrestlemania", company: "WWE", type: "PPV", notes: "28 occurrences" }
    ],
    wrestlers: [
      { id: "w-hangman", name: "Hangman Page", company: "AEW", notes: "" },
      { id: "w-swerve", name: "Swerve Strickland", company: "AEW", notes: "" },
      { id: "w-toni", name: "Toni Storm", company: "AEW", notes: "" },
      { id: "w-mercedes", name: "Mercedes Mone", company: "AEW", notes: "" },
      { id: "w-okada", name: "Kazuchika Okada", company: "AEW", notes: "" },
      { id: "w-ospreay", name: "Will Ospreay", company: "AEW", notes: "" },
      { id: "w-moxley", name: "Jon Moxley", company: "AEW", notes: "" },
      { id: "w-danielson", name: "Bryan Danielson", company: "AEW", notes: "" }
    ],
    teams: [
      { id: "t-bucks", name: "The Young Bucks", company: "AEW", notes: "" },
      { id: "t-ftr", name: "FTR", company: "AEW", notes: "" },
      { id: "t-death-riders", name: "Death Riders", company: "AEW", notes: "" }
    ],
    events: [
      {
        id: "event-2026-dynamite-01",
        date: "2026-01-07",
        company: "AEW",
        show: "Dynamite",
        venue: "TBD",
        notes: "Seed event based on the yearly sheet structure.",
        matches: [
          {
            id: "match-1",
            title: "Hangman Page vs Swerve Strickland",
            type: "Singles",
            division: "Men",
            participants: ["Hangman Page", "Swerve Strickland"],
            predictions: { "player-harri": "Hangman Page", "player-guest": "Swerve Strickland" },
            winner: "",
            notes: ""
          },
          {
            id: "match-2",
            title: "Toni Storm vs Mercedes Mone",
            type: "Title Match",
            division: "Women",
            participants: ["Toni Storm", "Mercedes Mone"],
            predictions: { "player-harri": "Toni Storm", "player-guest": "Toni Storm" },
            winner: "",
            notes: ""
          }
        ]
      },
      {
        id: "event-2025-full-gear",
        date: "2025-11-22",
        company: "AEW",
        show: "Full Gear",
        venue: "TBD",
        notes: "Completed sample for score behavior.",
        matches: [
          {
            id: "match-3",
            title: "Will Ospreay vs Kazuchika Okada",
            type: "Singles",
            division: "Men",
            participants: ["Will Ospreay", "Kazuchika Okada"],
            predictions: { "player-harri": "Will Ospreay", "player-guest": "Kazuchika Okada" },
            winner: "Will Ospreay",
            notes: "One point for a correct winner."
          }
        ]
      }
    ]
  };

  let state = mergeSeedDatabases(loadState());
  let currentView = "dashboard";
  let selectedEventId = state.events[0] ? state.events[0].id : null;
  let editingMatchId = null;
  let entityKind = null;

  const dom = {
    saveStatus: document.querySelector("#saveStatus"),
    themeButtons: document.querySelectorAll("[data-theme-choice]"),
    viewTitle: document.querySelector("#viewTitle"),
    yearFilter: document.querySelector("#yearFilter"),
    companyFilter: document.querySelector("#companyFilter"),
    metricGrid: document.querySelector("#metricGrid"),
    upcomingList: document.querySelector("#upcomingList"),
    leaderboard: document.querySelector("#leaderboard"),
    recentResults: document.querySelector("#recentResults"),
    recentCount: document.querySelector("#recentCount"),
    eventList: document.querySelector("#eventList"),
    eventForm: document.querySelector("#eventForm"),
    eventDate: document.querySelector("#eventDate"),
    eventCompany: document.querySelector("#eventCompany"),
    eventShow: document.querySelector("#eventShow"),
    eventVenue: document.querySelector("#eventVenue"),
    eventNotes: document.querySelector("#eventNotes"),
    matchesList: document.querySelector("#matchesList"),
    matchDialog: document.querySelector("#matchDialog"),
    matchDialogTitle: document.querySelector("#matchDialogTitle"),
    matchForm: document.querySelector("#matchForm"),
    matchTitle: document.querySelector("#matchTitle"),
    matchType: document.querySelector("#matchType"),
    matchDivision: document.querySelector("#matchDivision"),
    matchParticipants: document.querySelector("#matchParticipants"),
    matchWinner: document.querySelector("#matchWinner"),
    matchNotes: document.querySelector("#matchNotes"),
    predictionFields: document.querySelector("#predictionFields"),
    deleteMatchButton: document.querySelector("#deleteMatchButton"),
    companyList: document.querySelector("#companyList"),
    tvShowList: document.querySelector("#tvShowList"),
    ppvShowList: document.querySelector("#ppvShowList"),
    wrestlerList: document.querySelector("#wrestlerList"),
    teamList: document.querySelector("#teamList"),
    entityDialog: document.querySelector("#entityDialog"),
    entityDialogTitle: document.querySelector("#entityDialogTitle"),
    entityForm: document.querySelector("#entityForm"),
    entityName: document.querySelector("#entityName"),
    entityCompany: document.querySelector("#entityCompany"),
    entityNotes: document.querySelector("#entityNotes")
  };

  function loadState() {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return structuredClone(seedState);
    try {
      return normalizeState(JSON.parse(saved));
    } catch (error) {
      console.warn("Could not load saved data", error);
      return structuredClone(seedState);
    }
  }

  function normalizeState(next) {
    return {
      players: next.players || seedState.players,
      companies: next.companies || seedState.companies,
      shows: next.shows || seedState.shows,
      wrestlers: next.wrestlers || seedState.wrestlers,
      teams: next.teams || seedState.teams,
      events: (next.events || []).map((event) => ({
        ...event,
        matches: event.matches || []
      }))
    };
  }

  function mergeSeedDatabases(next) {
    if (localStorage.getItem(databaseSeedVersionKey) === databaseSeedVersion) return next;
    const merged = {
      ...next,
      companies: mergeEntities(seedState.companies, next.companies),
      shows: mergeEntities(seedState.shows, next.shows),
      wrestlers: mergeEntities(seedState.wrestlers, next.wrestlers),
      teams: mergeEntities(seedState.teams, next.teams)
    };
    localStorage.setItem(storageKey, JSON.stringify(merged, null, 2));
    localStorage.setItem(databaseSeedVersionKey, databaseSeedVersion);
    return merged;
  }

  function mergeEntities(seedItems, currentItems) {
    const byName = new Map();
    seedItems.forEach((item) => byName.set(clean(item.name), item));
    (currentItems || []).forEach((item) => {
      const key = clean(item.name);
      if (!byName.has(key)) byName.set(key, item);
    });
    return Array.from(byName.values()).sort((a, b) => a.name.localeCompare(b.name));
  }

  function saveState() {
    localStorage.setItem(storageKey, JSON.stringify(state, null, 2));
    dom.saveStatus.textContent = "Saved " + new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  }

  function applyTheme(theme) {
    activeTheme = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = activeTheme;
    localStorage.setItem(themeKey, activeTheme);
    dom.themeButtons.forEach((button) => {
      const isActive = button.dataset.themeChoice === activeTheme;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function uid(prefix) {
    return prefix + "-" + Math.random().toString(36).slice(2, 10);
  }

  function selectedYear() {
    return dom.yearFilter.value;
  }

  function selectedCompany() {
    return dom.companyFilter.value;
  }

  function filteredEvents() {
    return state.events
      .filter((event) => selectedYear() === "all" || event.date.startsWith(selectedYear()))
      .filter((event) => selectedCompany() === "all" || event.company === selectedCompany())
      .sort((a, b) => a.date.localeCompare(b.date));
  }

  function getSelectedEvent() {
    return state.events.find((event) => event.id === selectedEventId) || state.events[0] || null;
  }

  function render() {
    renderFilters();
    renderView();
    renderDashboard();
    renderEvents();
    renderEntities();
  }

  function renderFilters() {
    const years = Array.from(new Set(state.events.map((event) => event.date.slice(0, 4)))).sort().reverse();
    const companies = state.companies.map((company) => company.name).sort();
    updateOptions(dom.yearFilter, ["all", ...years], selectedYear() || new Date().getFullYear().toString(), "All years");
    updateOptions(dom.companyFilter, ["all", ...companies], selectedCompany() || "all", "All companies");
    updateOptions(dom.eventCompany, companies, dom.eventCompany.value || companies[0], null);
    updateOptions(dom.eventShow, state.shows.map((show) => show.name), dom.eventShow.value || state.shows[0].name, null);
  }

  function updateOptions(select, values, selected, allLabel) {
    const old = select.value || selected;
    select.innerHTML = "";
    values.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value === "all" && allLabel ? allLabel : value;
      select.append(option);
    });
    select.value = values.includes(old) ? old : selected;
  }

  function renderView() {
    document.querySelectorAll(".tab").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.view === currentView);
    });
    document.querySelectorAll(".view").forEach((view) => {
      view.classList.toggle("is-active", view.id === currentView + "View");
    });
    dom.viewTitle.textContent = currentView === "entities" ? "Database" : titleCase(currentView);
  }

  function renderDashboard() {
    const events = filteredEvents();
    const matches = events.flatMap((event) => event.matches.map((match) => ({ ...match, event })));
    const completed = matches.filter((match) => match.winner);
    const totalCalls = matches.reduce((sum, match) => sum + Object.keys(match.predictions || {}).filter((id) => match.predictions[id]).length, 0);
    const metrics = [
      ["Events", events.length],
      ["Matches", matches.length],
      ["Finals", completed.length],
      ["Calls", totalCalls]
    ];

    dom.metricGrid.innerHTML = metrics.map(([label, value]) => `
      <article class="metric-card">
        <span>${escapeHtml(label)}</span>
        <strong>${value}</strong>
      </article>
    `).join("");

    const today = new Date().toISOString().slice(0, 10);
    const upcoming = events.filter((event) => event.date >= today).slice(0, 5);
    dom.upcomingList.innerHTML = upcoming.length ? upcoming.map(eventCard).join("") : emptyState("No upcoming events in this filter.");

    const scores = calculateScores(events);
    dom.leaderboard.innerHTML = scores.length ? scores.map((row) => `
      <div class="leader-row">
        <div>
          <strong>${escapeHtml(row.name)}</strong>
          <div class="muted">${row.correct}/${row.total} correct</div>
        </div>
        <span class="leader-score">${row.points}</span>
      </div>
    `).join("") : emptyState("No predictions yet.");

    const recent = completed.slice(-8).reverse();
    dom.recentCount.textContent = completed.length + " final";
    dom.recentResults.innerHTML = recent.length ? recent.map((match) => `
      <div class="result-row">
        <span>${formatDate(match.event.date)}</span>
        <strong>${escapeHtml(match.title)}</strong>
        <span>${escapeHtml(match.winner)}</span>
      </div>
    `).join("") : emptyState("No completed matches yet.");
  }

  function calculateScores(events) {
    return state.players.map((player) => {
      let correct = 0;
      let total = 0;
      events.forEach((event) => {
        event.matches.forEach((match) => {
          const pick = match.predictions && match.predictions[player.id];
          if (!pick || !match.winner) return;
          total += 1;
          if (clean(pick) === clean(match.winner)) correct += 1;
        });
      });
      return { ...player, correct, total, points: correct };
    }).sort((a, b) => b.points - a.points || b.total - a.total);
  }

  function renderEvents() {
    const events = filteredEvents();
    if (!events.some((event) => event.id === selectedEventId)) {
      selectedEventId = events[0] ? events[0].id : state.events[0] ? state.events[0].id : null;
    }

    dom.eventList.innerHTML = events.length ? events.map((event) => eventCard(event, event.id === selectedEventId)).join("") : emptyState("No events match this filter.");

    const event = getSelectedEvent();
    if (!event) {
      dom.eventForm.reset();
      dom.matchesList.innerHTML = emptyState("Create an event to start a card.");
      return;
    }

    dom.eventDate.value = event.date;
    dom.eventCompany.value = event.company;
    dom.eventShow.value = event.show;
    dom.eventVenue.value = event.venue || "";
    dom.eventNotes.value = event.notes || "";

    dom.matchesList.innerHTML = event.matches.length ? event.matches.map(matchCard).join("") : emptyState("No matches on this card yet.");
  }

  function eventCard(event, isSelected) {
    const showClass = showColors[event.show] || "";
    return `
      <article class="event-card ${isSelected ? "is-selected" : ""}">
        <button type="button" data-event-id="${event.id}">
          <div class="event-card-header">
            <h4>${escapeHtml(event.show)}</h4>
            <span class="event-date">${formatDate(event.date)}</span>
          </div>
          <div class="muted">${escapeHtml(event.company)}${event.venue ? " / " + escapeHtml(event.venue) : ""}</div>
          <span class="show-chip ${showClass}">${escapeHtml(event.show)}</span>
        </button>
      </article>
    `;
  }

  function matchCard(match) {
    const predictions = state.players.map((player) => {
      const pick = match.predictions && match.predictions[player.id] ? match.predictions[player.id] : "";
      const correct = match.winner && clean(pick) === clean(match.winner);
      return `
        <div class="prediction ${correct ? "is-correct" : ""}">
          <span class="muted">${escapeHtml(player.name)}</span>
          <strong>${escapeHtml(pick || "No call")}</strong>
        </div>
      `;
    }).join("");

    return `
      <article class="match-card">
        <div class="match-card-header">
          <div>
            <h4>${escapeHtml(match.title)}</h4>
            <div class="match-meta">${escapeHtml(match.type)} / ${escapeHtml(match.division)}${match.winner ? " / Winner: " + escapeHtml(match.winner) : ""}</div>
          </div>
          <button class="secondary-button" type="button" data-match-id="${match.id}">Edit</button>
        </div>
        <div class="match-grid">${predictions}</div>
      </article>
    `;
  }

  function renderEntities() {
    renderEntityList("company", state.companies, dom.companyList);
    renderEntityList("show", state.shows.filter((show) => show.type === "TV"), dom.tvShowList);
    renderEntityList("show", state.shows.filter((show) => show.type === "PPV"), dom.ppvShowList);
    renderEntityList("wrestler", state.wrestlers, dom.wrestlerList);
    renderEntityList("team", state.teams, dom.teamList);
  }

  function renderEntityList(kind, items, node) {
    node.innerHTML = items.map((item) => `
      <div class="entity-row">
        <div>
          <strong>${escapeHtml(item.name)}</strong>
          <div class="entity-meta">${escapeHtml([item.company, item.type, item.notes].filter(Boolean).join(" / "))}</div>
        </div>
        <button class="secondary-button" type="button" data-remove-entity="${kind}" data-entity-id="${item.id}">Remove</button>
      </div>
    `).join("");
  }

  function openMatchDialog(matchId) {
    const event = getSelectedEvent();
    if (!event) return;
    editingMatchId = matchId;
    const match = event.matches.find((item) => item.id === matchId) || {
      id: uid("match"),
      title: "",
      type: "Singles",
      division: "Men",
      participants: [],
      predictions: {},
      winner: "",
      notes: ""
    };

    dom.matchDialogTitle.textContent = matchId ? "Edit Match" : "Add Match";
    dom.matchTitle.value = match.title;
    dom.matchType.value = match.type;
    dom.matchDivision.value = match.division;
    dom.matchParticipants.value = (match.participants || []).join(", ");
    dom.matchWinner.value = match.winner || "";
    dom.matchNotes.value = match.notes || "";
    dom.deleteMatchButton.style.display = matchId ? "inline-block" : "none";
    dom.predictionFields.innerHTML = state.players.map((player) => `
      <label>
        <span>${escapeHtml(player.name)} call</span>
        <input data-player-pick="${player.id}" type="text" value="${escapeAttribute(match.predictions[player.id] || "")}" placeholder="Predicted winner">
      </label>
    `).join("");
    dom.matchDialog.showModal();
  }

  function saveMatch() {
    const event = getSelectedEvent();
    if (!event) return;
    const predictions = {};
    dom.predictionFields.querySelectorAll("[data-player-pick]").forEach((input) => {
      predictions[input.dataset.playerPick] = input.value.trim();
    });

    const next = {
      id: editingMatchId || uid("match"),
      title: dom.matchTitle.value.trim(),
      type: dom.matchType.value,
      division: dom.matchDivision.value,
      participants: dom.matchParticipants.value.split(",").map((item) => item.trim()).filter(Boolean),
      predictions,
      winner: dom.matchWinner.value.trim(),
      notes: dom.matchNotes.value.trim()
    };

    const index = event.matches.findIndex((match) => match.id === next.id);
    if (index >= 0) event.matches[index] = next;
    else event.matches.push(next);
    saveState();
    dom.matchDialog.close();
    render();
  }

  function saveEvent(event) {
    event.preventDefault();
    const current = getSelectedEvent();
    if (!current) return;
    current.date = dom.eventDate.value;
    current.company = dom.eventCompany.value;
    current.show = dom.eventShow.value;
    current.venue = dom.eventVenue.value.trim();
    current.notes = dom.eventNotes.value.trim();
    saveState();
    render();
  }

  function newEvent() {
    const year = selectedYear() !== "all" ? selectedYear() : new Date().getFullYear().toString();
    const event = {
      id: uid("event"),
      date: year + "-01-01",
      company: state.companies[0] ? state.companies[0].name : "AEW",
      show: state.shows[0] ? state.shows[0].name : "Dynamite",
      venue: "",
      notes: "",
      matches: []
    };
    state.events.push(event);
    selectedEventId = event.id;
    currentView = "events";
    saveState();
    render();
  }

  function deleteEvent() {
    const event = getSelectedEvent();
    if (!event) return;
    if (!confirm("Delete this event and its matches?")) return;
    state.events = state.events.filter((item) => item.id !== event.id);
    selectedEventId = state.events[0] ? state.events[0].id : null;
    saveState();
    render();
  }

  function openEntityDialog(kind) {
    entityKind = kind;
    dom.entityDialogTitle.textContent = "Add " + entityLabel(kind);
    dom.entityForm.reset();
    dom.entityDialog.showModal();
  }

  function saveEntity(event) {
    event.preventDefault();
    const collection = collectionForKind(entityKind);
    if (!collection) return;
    collection.push({
      id: uid(entityKind),
      name: dom.entityName.value.trim(),
      company: dom.entityCompany.value.trim(),
      type: entityKind === "show-tv" ? "TV" : entityKind === "show-ppv" ? "PPV" : undefined,
      notes: dom.entityNotes.value.trim()
    });
    saveState();
    dom.entityDialog.close();
    render();
  }

  function collectionForKind(kind) {
    if (kind === "wrestler") return state.wrestlers;
    if (kind === "team") return state.teams;
    if (kind === "show" || kind === "show-tv" || kind === "show-ppv") return state.shows;
    if (kind === "company") return state.companies;
    return null;
  }

  function entityLabel(kind) {
    if (kind === "show-tv") return "TV Show";
    if (kind === "show-ppv") return "PPV Show";
    return titleCase(kind);
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "aew-calling-it-export.json";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  function importJson(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        state = normalizeState(JSON.parse(reader.result));
        selectedEventId = state.events[0] ? state.events[0].id : null;
        saveState();
        render();
      } catch (error) {
        alert("That JSON file could not be imported.");
      }
    };
    reader.readAsText(file);
  }

  function emptyState(text) {
    return `<div class="empty-state">${escapeHtml(text)}</div>`;
  }

  function formatDate(value) {
    if (!value) return "";
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day).toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" });
  }

  function titleCase(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function clean(value) {
    return String(value || "").trim().toLowerCase();
  }

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char]));
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replace(/`/g, "&#96;");
  }

  document.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-view]");
    if (tab) {
      currentView = tab.dataset.view;
      render();
      return;
    }

    const eventButton = event.target.closest("[data-event-id]");
    if (eventButton) {
      selectedEventId = eventButton.dataset.eventId;
      currentView = "events";
      render();
      return;
    }

    const matchButton = event.target.closest("[data-match-id]");
    if (matchButton) {
      openMatchDialog(matchButton.dataset.matchId);
      return;
    }

    const entityButton = event.target.closest("[data-entity-kind]");
    if (entityButton) {
      openEntityDialog(entityButton.dataset.entityKind);
      return;
    }

    const removeButton = event.target.closest("[data-remove-entity]");
    if (removeButton) {
      const collection = collectionForKind(removeButton.dataset.removeEntity);
      const id = removeButton.dataset.entityId;
      const index = collection.findIndex((item) => item.id === id);
      if (index >= 0) collection.splice(index, 1);
      saveState();
      render();
      return;
    }

    if (event.target.matches("[data-close-dialog]")) {
      event.target.closest("dialog").close();
    }
  });

  dom.themeButtons.forEach((button) => {
    button.addEventListener("click", () => applyTheme(button.dataset.themeChoice));
  });

  dom.yearFilter.addEventListener("change", render);
  dom.companyFilter.addEventListener("change", render);
  dom.eventForm.addEventListener("submit", saveEvent);
  dom.matchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveMatch();
  });
  dom.entityForm.addEventListener("submit", saveEntity);
  document.querySelector("#newEventButton").addEventListener("click", newEvent);
  document.querySelector("#quickEventButton").addEventListener("click", newEvent);
  document.querySelector("#addMatchButton").addEventListener("click", () => openMatchDialog(null));
  document.querySelector("#deleteEventButton").addEventListener("click", deleteEvent);
  dom.deleteMatchButton.addEventListener("click", () => {
    const event = getSelectedEvent();
    if (!event || !editingMatchId) return;
    event.matches = event.matches.filter((match) => match.id !== editingMatchId);
    saveState();
    dom.matchDialog.close();
    render();
  });
  document.querySelector("#addPlayerButton").addEventListener("click", () => {
    const name = prompt("Player name");
    if (!name) return;
    state.players.push({ id: uid("player"), name: name.trim() });
    saveState();
    render();
  });
  document.querySelector("#exportButton").addEventListener("click", exportJson);
  document.querySelector("#importInput").addEventListener("change", (event) => importJson(event.target.files[0]));
  document.querySelector("#resetButton").addEventListener("click", () => {
    if (!confirm("Replace local data with the starter dataset?")) return;
    state = structuredClone(seedState);
    selectedEventId = state.events[0].id;
    saveState();
    render();
  });

  applyTheme(activeTheme);
  render();
}());
