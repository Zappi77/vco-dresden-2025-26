const cardsEl = document.querySelector("#spielkarten");
const pointsChainEl = document.querySelector("#points-chain");
const rankChartEl = document.querySelector("#rank-chart");
const finalStandingsEl = document.querySelector("#final-standings");
const standingsSourceEl = document.querySelector("#standings-source");
const crossTableSourceEl = document.querySelector("#cross-table-source");
const crossTableEl = document.querySelector("#cross-table");
const seasonStatsSwitcherEl = document.querySelector("#season-stats-switcher");
const seasonStatsGridEl = document.querySelector("#season-stats-grid");
const focusMvpsListEl = document.querySelector("#dresdner-mvps-list");
const youtubeViewsDateEl = document.querySelector("#youtube-views-date");
const youtubeViewsListEl = document.querySelector("#youtube-views-list");
const template = document.querySelector("#game-card-template");
const filterButtons = document.querySelectorAll(".filter-button");

const focusTeam = "VCO Dresden";

function isFocusTeamWin(game) {
  const [homeSets, awaySets] = game.score.split(":").map(Number);
  return game.home === focusTeam ? homeSets > awaySets : awaySets > homeSets;
}

function focusTeamSets(game) {
  const [homeSets, awaySets] = game.score.split(":").map(Number);
  return game.home === focusTeam ? { own: homeSets, opponent: awaySets } : { own: awaySets, opponent: homeSets };
}

function focusTeamPoints(game) {
  const sets = focusTeamSets(game);
  if (sets.own === 3 && sets.opponent <= 1) return 3;
  if (sets.own === 3 && sets.opponent === 2) return 2;
  if (sets.own === 2 && sets.opponent === 3) return 1;
  return 0;
}

function focusTeamScore(game) {
  const sets = focusTeamSets(game);
  return `${sets.own}:${sets.opponent}`;
}

function focusTeamBallPoints(game) {
  const [homePoints, awayPoints] = game.ballPoints.split(":").map(Number);
  return game.home === focusTeam ? { own: homePoints, opponent: awayPoints } : { own: awayPoints, opponent: homePoints };
}

function opponentInfo(game) {
  const isHome = game.home === focusTeam;
  const opponent = isHome ? game.away : game.home;
  const badge = teamBadges[opponent] || { short: opponent.slice(0, 3).toUpperCase() };
  return { venue: isHome ? "H" : "A", short: badge.short, name: opponent };
}

function teamIdFor(teamName) {
  const url = teamProfileUrls?.[teamName];
  return url?.match(/teamId=(\d+)/)?.[1] || null;
}

function logoUrlFor(teamName) {
  const explicitLogoUrl = teamLogoUrls?.[teamName];
  if (explicitLogoUrl) return explicitLogoUrl;

  const teamId = teamIdFor(teamName);
  return teamId ? `https://vbl-web.sams-server.de/public/team/logo/${teamId}` : null;
}

function renderBadge(container, teamName) {
  const badge = teamBadges[teamName] || { short: teamName.slice(0, 3).toUpperCase(), color: "#637083", text: "#FFFFFF" };
  const logoUrl = logoUrlFor(teamName);

  container.innerHTML = "";
  container.classList.remove("logo-fallback");
  container.style.setProperty("--badge-bg", badge.color);
  container.style.setProperty("--badge-text", badge.text);
  container.setAttribute("aria-label", `${teamName} Logo`);

  if (!logoUrl) {
    container.textContent = badge.short;
    return;
  }

  const image = document.createElement("img");
  image.className = "team-logo";
  image.src = logoUrl;
  image.alt = `${teamName} Logo`;
  image.loading = "lazy";
  image.decoding = "async";
  image.referrerPolicy = "no-referrer";
  image.addEventListener("error", () => {
    container.innerHTML = "";
    container.textContent = badge.short;
    container.classList.add("logo-fallback");
  }, { once: true });
  container.append(image);
}

function renderTeamName(container, teamName) {
  container.innerHTML = "";
  const url = teamProfileUrls?.[teamName];
  if (url) {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = teamName;
    container.append(link);
  } else {
    container.textContent = teamName;
  }
}

function createMvpNode(mvp) {
  const wrapper = document.createElement("span");
  wrapper.className = "mvp-item";
  wrapper.append(`${mvp.team}: `);

  const url = mvp.url || playerProfileUrls?.[mvp.name];
  if (url) {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = mvp.name;
    wrapper.append(link);
  } else {
    wrapper.append(mvp.name);
  }

  return wrapper;
}

function renderMvps(container, mvps) {
  container.innerHTML = "";
  if (!mvps || mvps.length === 0) {
    container.textContent = "noch nicht erfasst";
    return;
  }

  mvps.forEach((mvp, index) => {
    if (index > 0) container.append(" · ");
    container.append(createMvpNode(mvp));
  });
}

function renderCards(filter = "all") {
  cardsEl.innerHTML = "";

  games
    .filter(game => {
      if (filter === "home") return game.home === focusTeam;
      if (filter === "away") return game.away === focusTeam;
      if (filter === "win") return isFocusTeamWin(game);
      if (filter === "loss") return !isFocusTeamWin(game);
      return true;
    })
    .forEach(game => {
      const node = template.content.cloneNode(true);
      const card = node.querySelector(".game-card");
      const won = isFocusTeamWin(game);

      card.classList.add(won ? "win" : "loss");
      card.dataset.homeAway = game.home === focusTeam ? "home" : "away";
      card.dataset.result = won ? "win" : "loss";

      node.querySelector(".date").textContent = `${game.weekday}, ${game.date} · ${game.time} Uhr`;
      node.querySelector(".game-number").textContent = `#${game.number}`;
      node.querySelector(".match-id").textContent = `matchId ${game.matchId}`;
      renderTeamName(node.querySelector(".home-name"), game.home);
      renderTeamName(node.querySelector(".away-name"), game.away);
      renderBadge(node.querySelector(".home-badge"), game.home);
      renderBadge(node.querySelector(".away-badge"), game.away);
      node.querySelector(".score").textContent = game.score;
      node.querySelector(".ball-points").textContent = `${game.ballPoints} Ballpunkte`;
      node.querySelector(".rank").textContent = `${game.rankAfter}. Platz`;
      node.querySelector(".duration").textContent = `${game.duration} Min.`;
      node.querySelector(".spectators").textContent = game.spectators.toLocaleString("de-DE");
      node.querySelector(".venue").textContent = game.venue;
      const summary = game.summary || gameSummaries?.[game.number] || [];
      const reportSummary = node.querySelector(".report-summary");
      reportSummary.textContent = summary.join(" ");
      if (summary.length === 0) {
        reportSummary.closest(".report-block").classList.add("is-empty");
      }
      renderMvps(node.querySelector(".mvps"), game.mvps);

      const setsEl = node.querySelector(".sets");
      game.sets.forEach((set, index) => {
        const pill = document.createElement("span");
        pill.className = "set-pill";
        pill.textContent = `${index + 1}. Satz ${set}`;
        setsEl.append(pill);
      });

      const detailUrl = `https://www.volleyball-bundesliga.de/popup/matchSeries/matchDetails.xhtml?matchId=${game.matchId}`;
      const officialReportUrl = game.statsUrl;
      const statsUrl = `https://live.volleyball-bundesliga.de/2025-26/Women/${game.number}.pdf`;
      node.querySelector(".detail-link").href = detailUrl;
      node.querySelector(".official-report-link").href = officialReportUrl;
      const statsLink = node.querySelector(".stats-link");
      if (game.statsUnavailable) {
        statsLink.removeAttribute("href");
        statsLink.classList.add("disabled");
        statsLink.textContent = "Spielstatistik nicht verfügbar";
      } else {
        statsLink.href = statsUrl;
      }

      const articleLinks = node.querySelector(".article-links");
      if (game.articleUrl) {
        const link = document.createElement("a");
        const originCode = game.articleOrigin || "VCO";
        const originBadge = Object.values(teamBadges).find((badge) => badge.short === originCode);
        const origin = document.createElement("span");
        const title = document.createElement("span");
        link.className = "article-chip";
        link.href = game.articleUrl;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.setAttribute("aria-label", `${originCode}: ${game.articleTitle || "Spielbericht zum Spiel"}`);
        origin.className = "article-origin";
        origin.textContent = originCode;
        if (originBadge) {
          origin.style.backgroundColor = originBadge.color;
          origin.style.color = originBadge.text;
        }
        title.className = "article-title";
        title.textContent = game.articleTitle || "Spielbericht zum Spiel";
        link.append(origin, title);
        articleLinks.append(link);
      }

      const videoLink = node.querySelector(".video-link");
      if (game.videoUrl) {
        videoLink.href = game.videoUrl;
        videoLink.classList.remove("disabled");
        videoLink.textContent = game.videoSearch ? "YouTube Suche" : "YouTube Video";
      } else if (game.videoUnavailable) {
        videoLink.removeAttribute("href");
        videoLink.classList.add("disabled");
        videoLink.textContent = "kein Video";
      } else if (game.videoSearchUrl) {
        videoLink.href = game.videoSearchUrl;
        videoLink.classList.remove("disabled");
        videoLink.textContent = "YouTube Suche";
      } else {
        videoLink.href = "https://www.youtube.com/results?search_query=VCO+Dresden+2.+Liga+Pro+2025%2F26";
        videoLink.classList.remove("disabled");
        videoLink.textContent = "YouTube Suche";
      }

      if (game.galleryUrl) {
        const mediaRow = node.querySelector(".media-row");
        const galleryLink = node.querySelector(".gallery-link");
        mediaRow.classList.add("has-gallery");
        galleryLink.href = game.galleryUrl;
      }

      cardsEl.append(node);
    });
}

function renderPointsChain() {
  pointsChainEl.innerHTML = "";
  let totalPoints = 0;

  games.forEach((game, index) => {
    const points = focusTeamPoints(game);
    const score = focusTeamScore(game);
    const opponent = opponentInfo(game);
    totalPoints += points;

    const item = document.createElement("div");
    item.className = "points-game";

    const dot = document.createElement("a");
    dot.className = `points-dot points-${points}`;
    dot.href = `https://www.volleyball-bundesliga.de/popup/matchSeries/matchDetails.xhtml?matchId=${game.matchId}`;
    dot.target = "_blank";
    dot.rel = "noreferrer";
    dot.textContent = totalPoints;
    dot.title = `Spieltag ${index + 1}, #${game.number}: ${game.home} ${game.score} ${game.away} - ${points} Punkt${points === 1 ? "" : "e"}, ${totalPoints} gesamt`;
    dot.setAttribute("aria-label", dot.title);

    const label = document.createElement("span");
    label.className = "points-label";
    label.innerHTML = `<span>${index + 1}</span><span>${opponent.venue} ${opponent.short}</span><span>${score}</span><span class="rank-label"><b>${game.rankAfter}.</b><small>Platz</small></span>`;

    item.append(dot, label);
    pointsChainEl.append(item);
  });
}

function renderRankChart() {
  const width = 840;
  const height = 300;
  const margin = { top: 24, right: 22, bottom: 48, left: 44 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const maxRank = Math.max(10, ...games.map((game) => game.rankAfter));
  const minRank = 1;
  const xFor = (index) => margin.left + (index / (games.length - 1)) * innerWidth;
  const yFor = (rank) => margin.top + ((rank - minRank) / (maxRank - minRank)) * innerHeight;
  const svgNs = "http://www.w3.org/2000/svg";
  const make = (tag, attrs = {}) => {
    const node = document.createElementNS(svgNs, tag);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
    return node;
  };

  rankChartEl.innerHTML = "";

  const svg = make("svg", {
    viewBox: `0 0 ${width} ${height}`,
    role: "img",
    "aria-label": "Tabellenplatz von VCO Dresden nach jedem Spieltag"
  });

  const title = make("title");
  title.textContent = "Tabellenverlauf nach Spieltagen";
  svg.append(title);

  for (let rank = minRank; rank <= maxRank; rank += 1) {
    const y = yFor(rank);
    svg.append(make("line", {
      class: "rank-grid-line",
      x1: margin.left,
      y1: y,
      x2: width - margin.right,
      y2: y
    }));

    const label = make("text", {
      class: "rank-axis-label",
      x: margin.left - 10,
      y: y + 4,
      "text-anchor": "end"
    });
    label.textContent = `${rank}.`;
    svg.append(label);
  }

  games.forEach((game, index) => {
    const x = xFor(index);
    const isMajorTick = index === 0 || index === games.length - 1 || (index + 1) % 7 === 0;
    svg.append(make("line", {
      class: isMajorTick ? "rank-tick-line" : "rank-tick-line rank-tick-line-minor",
      x1: x,
      y1: margin.top,
      x2: x,
      y2: height - margin.bottom
    }));

    const label = make("text", {
      class: isMajorTick ? "rank-axis-label" : "rank-axis-label rank-axis-label-minor",
      x,
      y: height - margin.bottom + 24,
      "text-anchor": "middle"
    });
    label.textContent = `${index + 1}`;
    svg.append(label);
  });

  const yAxisTitle = make("text", {
    class: "rank-axis-title",
    x: 0 - (margin.top + innerHeight / 2),
    y: 15,
    transform: "rotate(-90)",
    "text-anchor": "middle"
  });
  yAxisTitle.textContent = "Tabellenplatz";
  svg.append(yAxisTitle);

  const xAxisTitle = make("text", {
    class: "rank-axis-title",
    x: margin.left + innerWidth / 2,
    y: height - 8,
    "text-anchor": "middle"
  });
  xAxisTitle.textContent = "Spieltag";
  svg.append(xAxisTitle);

  const points = games.map((game, index) => `${xFor(index)},${yFor(game.rankAfter)}`).join(" ");
  svg.append(make("polyline", {
    class: "rank-line",
    points
  }));

  games.forEach((game, index) => {
    const point = make("a", {
      href: `https://www.volleyball-bundesliga.de/popup/matchSeries/matchDetails.xhtml?matchId=${game.matchId}`,
      target: "_blank",
      rel: "noreferrer"
    });
    const titleNode = make("title");
    titleNode.textContent = `Spieltag ${index + 1}, #${game.number}: ${game.rankAfter}. Platz nach ${game.home} ${game.score} ${game.away}`;
    const circle = make("circle", {
      class: isFocusTeamWin(game) ? "rank-point rank-point-win" : "rank-point rank-point-loss",
      cx: xFor(index),
      cy: yFor(game.rankAfter),
      r: 5
    });
    point.append(titleNode, circle);
    svg.append(point);
  });

  const summary = document.createElement("p");
  summary.className = "rank-chart-summary";
  const bestRank = Math.min(...games.map((game) => game.rankAfter));
  const worstRank = Math.max(...games.map((game) => game.rankAfter));
  const finalRank = games.at(-1).rankAfter;
  summary.textContent = `Bester Tabellenplatz: ${bestRank}. Platz · schlechtester Tabellenplatz: ${worstRank}. Platz · Abschluss: ${finalRank}. Platz.`;

  rankChartEl.append(svg, summary);
}

function renderFinalStandings() {
  const tables = [
    { key: "overall", title: "Gesamttabelle", label: "Normal" },
    { key: "home", title: "Heimtabelle", label: "Heim" },
    { key: "away", title: "Auswärtstabelle", label: "Auswärts" }
  ];
  let activeKey = "overall";

  standingsSourceEl.textContent = finalStandingsSource;
  finalStandingsEl.innerHTML = "";

  const wrap = document.createElement("section");
  wrap.className = "standings-table-card";

  const heading = document.createElement("h4");

  const scroller = document.createElement("div");
  scroller.className = "standings-table-scroll";

  const table = document.createElement("table");
  table.className = "standings-table";
  table.innerHTML = `
    <thead>
      <tr>
        <th>Pl.</th>
        <th>Team</th>
        <th>Sp.</th>
        <th>S</th>
        <th>Sätze</th>
        <th>Bälle</th>
        <th>Pkt.</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const legend = document.createElement("div");
  legend.className = "standings-legend";
  legend.innerHTML = `
    <span><i class="standings-line-sample standings-promotion-line"></i>Aufstiegsplatz</span>
    <span><i class="standings-line-sample standings-relegation-line"></i>Abstiegsplätze</span>
  `;

  const switcher = document.createElement("div");
  switcher.className = "standings-switcher";
  switcher.setAttribute("aria-label", "Tabellenart");

  const renderTable = () => {
    const tableConfig = tables.find((item) => item.key === activeKey);
    heading.textContent = tableConfig.title;
    const tbody = table.querySelector("tbody");
    tbody.innerHTML = "";

    finalStandings[activeKey].forEach((row) => {
      const tr = document.createElement("tr");
      const rowClasses = [];
      if (row.rank === 1) rowClasses.push("standings-promotion-row");
      if (row.rank === 2) rowClasses.push("standings-after-promotion-row");
      if (row.rank === 13) rowClasses.push("standings-relegation-row");
      if (row.rank >= 13) rowClasses.push("standings-relegation-zone-row");
      if (row.team === focusTeam) rowClasses.push("standings-focusTeam-row");
      tr.className = rowClasses.join(" ");

      const teamCell = document.createElement("td");
      teamCell.className = "standings-team-cell";
      renderTeamName(teamCell, row.team);

      [
        row.rank,
        teamCell,
        row.played,
        row.wins,
        row.sets,
        row.balls,
        row.points
      ].forEach((value, index) => {
        const cell = index === 1 ? value : document.createElement("td");
        if (index !== 1) cell.textContent = value;
        if (index === 6) cell.className = "standings-points-cell";
        tr.append(cell);
      });

      tbody.append(tr);
    });
  };

  tables.forEach(({ key, label }) => {
    const button = document.createElement("button");
    button.className = "standings-switch-button";
    button.type = "button";
    button.textContent = label;
    button.setAttribute("aria-pressed", key === activeKey ? "true" : "false");
    button.addEventListener("click", () => {
      activeKey = key;
      switcher.querySelectorAll(".standings-switch-button").forEach((item) => {
        item.classList.toggle("active", item === button);
        item.setAttribute("aria-pressed", item === button ? "true" : "false");
      });
      renderTable();
    });
    if (key === activeKey) button.classList.add("active");
    switcher.append(button);
  });

  scroller.append(table);
  wrap.append(heading, scroller, legend, switcher);
  finalStandingsEl.append(wrap);
  renderTable();
}

function renderCrossTable() {
  if (!crossTableEl || typeof crossTable === "undefined") return;

  crossTableSourceEl.innerHTML = "";
  const sourceLink = document.createElement("a");
  sourceLink.href = crossTable.sourceUrl;
  sourceLink.target = "_blank";
  sourceLink.rel = "noreferrer";
  sourceLink.textContent = crossTable.source;
  crossTableSourceEl.append(sourceLink);

  const scroller = document.createElement("div");
  scroller.className = "cross-table-scroll";

  const table = document.createElement("table");
  table.className = "cross-table";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const corner = document.createElement("th");
  corner.className = "cross-corner";
  corner.textContent = "Heim \\ Auswärts";
  headerRow.append(corner);

  crossTable.teams.forEach((team) => {
    const th = document.createElement("th");
    th.className = team === focusTeam ? "cross-focusTeam-col" : "";
    th.scope = "col";
    th.title = team;
    const badge = teamBadges[team] || { short: team.slice(0, 3).toUpperCase() };
    th.textContent = badge.short;
    headerRow.append(th);
  });
  thead.append(headerRow);

  const tbody = document.createElement("tbody");
  crossTable.rows.forEach((row) => {
    const tr = document.createElement("tr");
    if (row.team === focusTeam) tr.classList.add("cross-focusTeam-row");

    const teamCell = document.createElement("th");
    teamCell.scope = "row";
    teamCell.className = "cross-team-cell";
    renderTeamName(teamCell, row.team);
    tr.append(teamCell);

    row.cells.forEach((cell) => {
      const td = document.createElement("td");
      td.className = `cross-cell cross-${cell.status}`;
      if (cell.opponent === focusTeam) td.classList.add("cross-focusTeam-col");
      if (cell.title) td.title = `${cell.title}${cell.date ? `, ${cell.date}` : ""}`;

      if (cell.status === "self") {
        td.textContent = "–";
      } else if (cell.matchId) {
        const link = document.createElement("a");
        link.href = `https://www.volleyball-bundesliga.de/popup/matchSeries/matchDetails.xhtml?matchId=${cell.matchId}`;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.textContent = cell.value;
        td.append(link);
      } else {
        td.textContent = cell.value;
      }

      tr.append(td);
    });
    tbody.append(tr);
  });

  table.append(thead, tbody);
  scroller.append(table);
  crossTableEl.innerHTML = "";
  crossTableEl.append(scroller);
}

function formatRatio(own, opponent) {
  if (opponent === 0) return "n/a";
  return (own / opponent).toLocaleString("de-DE", { minimumFractionDigits: 3, maximumFractionDigits: 3 });
}

function seasonStats(filteredGames = games) {
  const scoreCounts = { "3:0": 0, "3:1": 0, "3:2": 0, "2:3": 0, "1:3": 0, "0:3": 0 };

  return filteredGames.reduce((stats, game) => {
    const sets = focusTeamSets(game);
    const score = `${sets.own}:${sets.opponent}`;
    const ballPoints = focusTeamBallPoints(game);
    const points = focusTeamPoints(game);
    const isWin = sets.own > sets.opponent;
    const isFiveSet = sets.own + sets.opponent === 5;

    if (scoreCounts[score] !== undefined) scoreCounts[score] += 1;
    stats.wins += isWin ? 1 : 0;
    stats.losses += isWin ? 0 : 1;
    stats.fiveSetMatches += isFiveSet ? 1 : 0;
    stats.fiveSetWins += isFiveSet && isWin ? 1 : 0;
    stats.fiveSetLosses += isFiveSet && !isWin ? 1 : 0;
    stats.setsWon += sets.own;
    stats.setsLost += sets.opponent;
    stats.ballPointsWon += ballPoints.own;
    stats.ballPointsLost += ballPoints.opponent;
    stats.leaguePoints += points;
    return stats;
  }, {
    scoreCounts,
    wins: 0,
    losses: 0,
    fiveSetMatches: 0,
    fiveSetWins: 0,
    fiveSetLosses: 0,
    setsWon: 0,
    setsLost: 0,
    ballPointsWon: 0,
    ballPointsLost: 0,
    leaguePoints: 0
  });
}

function renderSeasonStats(filter = "overall") {
  const filteredGames = games.filter((game) => {
    if (filter === "home") return game.home === focusTeam;
    if (filter === "away") return game.away === focusTeam;
    return true;
  });
  const stats = seasonStats(filteredGames);
  const gameCount = filteredGames.length || 1;
  const perGame = (value) => (value / gameCount).toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const rows = [
    ["Spiele", filteredGames.length],
    ["3:0", stats.scoreCounts["3:0"]],
    ["3:1", stats.scoreCounts["3:1"]],
    ["3:2", stats.scoreCounts["3:2"]],
    ["2:3", stats.scoreCounts["2:3"]],
    ["1:3", stats.scoreCounts["1:3"]],
    ["0:3", stats.scoreCounts["0:3"]],
    ["Siege", stats.wins],
    ["Niederlagen", stats.losses],
    ["5-Satz-Spiele", stats.fiveSetMatches],
    ["5-Satz-Siege", stats.fiveSetWins],
    ["5-Satz-Niederlagen", stats.fiveSetLosses],
    ["Gesamtpunkte", stats.leaguePoints],
    ["Punkte pro Spiel", perGame(stats.leaguePoints)],
    ["Gewonnene Sätze", stats.setsWon],
    ["Verlorene Sätze", stats.setsLost],
    ["Gewonnene Sätze pro Spiel", perGame(stats.setsWon)],
    ["Verlorene Sätze pro Spiel", perGame(stats.setsLost)],
    ["Satzverhältnis", `${stats.setsWon}:${stats.setsLost}`],
    ["Satzkoeffizient", formatRatio(stats.setsWon, stats.setsLost)],
    ["Gewonnene Ballpunkte", stats.ballPointsWon.toLocaleString("de-DE")],
    ["Verlorene Ballpunkte", stats.ballPointsLost.toLocaleString("de-DE")],
    ["Gewonnene Ballpunkte pro Spiel", perGame(stats.ballPointsWon)],
    ["Verlorene Ballpunkte pro Spiel", perGame(stats.ballPointsLost)],
    ["Ballverhältnis", `${stats.ballPointsWon.toLocaleString("de-DE")}:${stats.ballPointsLost.toLocaleString("de-DE")}`],
    ["Ballkoeffizient", formatRatio(stats.ballPointsWon, stats.ballPointsLost)]
  ];

  seasonStatsGridEl.innerHTML = "";
  rows.forEach(([label, value]) => {
    const item = document.createElement("div");
    item.className = "season-stat";
    item.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    seasonStatsGridEl.append(item);
  });
}

function renderSeasonStatsSwitcher() {
  const options = [
    { key: "overall", label: "Gesamt" },
    { key: "home", label: "Heim" },
    { key: "away", label: "Auswärts" }
  ];

  seasonStatsSwitcherEl.innerHTML = "";
  options.forEach(({ key, label }) => {
    const button = document.createElement("button");
    button.className = "season-stats-switch-button";
    button.type = "button";
    button.textContent = label;
    button.setAttribute("aria-pressed", key === "overall" ? "true" : "false");
    if (key === "overall") button.classList.add("active");
    button.addEventListener("click", () => {
      seasonStatsSwitcherEl.querySelectorAll(".season-stats-switch-button").forEach((item) => {
        item.classList.toggle("active", item === button);
        item.setAttribute("aria-pressed", item === button ? "true" : "false");
      });
      renderSeasonStats(key);
    });
    seasonStatsSwitcherEl.append(button);
  });
}

function focusTeamMvpStats() {
  const statsByPlayer = new Map();

  games.forEach((game) => {
    const won = isFocusTeamWin(game);
    (game.mvps || [])
      .filter((mvp) => mvp.team === focusTeam)
      .forEach((mvp) => {
        const current = statsByPlayer.get(mvp.name) || { name: mvp.name, total: 0, gold: 0, silver: 0 };
        current.total += 1;
        current.gold += won ? 1 : 0;
        current.silver += won ? 0 : 1;
        statsByPlayer.set(mvp.name, current);
      });
  });

  return [...statsByPlayer.values()].sort((a, b) => (
    b.total - a.total ||
    b.gold - a.gold ||
    a.name.localeCompare(b.name, "de")
  ));
}

function renderFocusTeamMvps() {
  const rows = focusTeamMvpStats();
  focusMvpsListEl.innerHTML = "";

  rows.forEach((row, index) => {
    const previous = rows[index - 1];
    const sameMedalScore = previous &&
      previous.total === row.total &&
      previous.gold === row.gold &&
      previous.silver === row.silver;
    const rankNumber = sameMedalScore ? previous.rankNumber : index + 1;
    row.rankNumber = rankNumber;

    const item = document.createElement("div");
    item.className = "focusTeam-mvp";

    const rank = document.createElement("span");
    rank.className = "mvp-rank";
    rank.textContent = sameMedalScore ? "" : `${rankNumber}.`;

    const name = document.createElement("span");
    name.className = "mvp-name";
    const url = playerProfileUrls?.[row.name];
    if (url) {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = row.name;
      name.append(link);
    } else {
      name.textContent = row.name;
    }

    const medals = document.createElement("span");
    medals.className = "mvp-medals";
    [
      { count: row.gold, type: "Goldene", className: "medal-gold" },
      { count: row.silver, type: "Silberne", className: "medal-silver" }
    ].forEach(({ count, type, className }) => {
      const medalItem = document.createElement("span");
      medalItem.className = "mvp-medal-count";
      const medal = document.createElement("i");
      medal.className = `medal ${className}`;
      const countNode = document.createElement("strong");
      countNode.textContent = count;
      medalItem.append(medal, countNode, ` ${type} Medaille${count === 1 ? "" : "n"}`);
      medals.append(medalItem);
    });

    const total = document.createElement("strong");
    total.className = "mvp-total";
    total.textContent = row.total;
    total.setAttribute("aria-label", `${row.total} MVP-Auszeichnungen`);

    item.append(rank, name, medals, total);
    focusMvpsListEl.append(item);
  });
}

function youtubeViewRows() {
  return games
    .filter((game) => Number.isFinite(game.youtubeViews))
    .map((game) => ({
      number: game.number,
      date: game.date,
      matchup: `${game.home} - ${game.away}`,
      score: game.score,
      views: game.youtubeViews,
      videoUrl: game.videoUrl
    }))
    .sort((a, b) => b.views - a.views || a.number - b.number);
}

function renderYoutubeViews() {
  const rows = youtubeViewRows();
  const totalViews = rows.reduce((sum, row) => sum + row.views, 0);

  youtubeViewsDateEl.textContent = rows.length === 0
    ? "YouTube-Aufrufzahlen sind noch nicht erfasst."
    : `Stand: ${youtubeViewsDate}, direkt aus den YouTube-Watchdaten ausgelesen`;
  youtubeViewsListEl.innerHTML = "";

  if (rows.length === 0) {
    const empty = document.createElement("div");
    empty.className = "youtube-view-row youtube-total-row";
    empty.innerHTML = "<span></span><strong>Noch keine Aufrufzahlen hinterlegt</strong><span></span><strong>0</strong>";
    youtubeViewsListEl.append(empty);
    return;
  }

  rows.forEach((row, index) => {
    const item = document.createElement("div");
    item.className = "youtube-view-row";

    const rank = document.createElement("span");
    rank.className = "youtube-rank";
    rank.textContent = `${index + 1}.`;

    const game = document.createElement("a");
    game.className = "youtube-game";
    game.href = row.videoUrl;
    game.target = "_blank";
    game.rel = "noreferrer";
    game.textContent = `#${row.number} · ${row.matchup} (${row.score})`;

    const date = document.createElement("span");
    date.className = "youtube-date";
    date.textContent = row.date;

    const views = document.createElement("strong");
    views.className = "youtube-views";
    views.textContent = row.views.toLocaleString("de-DE");

    item.append(rank, game, date, views);
    youtubeViewsListEl.append(item);
  });

  const total = document.createElement("div");
  total.className = "youtube-view-row youtube-total-row";
  total.innerHTML = `<span></span><strong>Gesamtanzahl Aufrufe</strong><span></span><strong>${totalViews.toLocaleString("de-DE")}</strong>`;
  youtubeViewsListEl.append(total);
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderCards(button.dataset.filter);
  });
});

renderCards();
renderPointsChain();
renderRankChart();
renderFinalStandings();
renderCrossTable();
renderSeasonStatsSwitcher();
renderSeasonStats();
renderFocusTeamMvps();
renderYoutubeViews();
