// ===== ICON SVG =====
const chevronSVG = `
  <svg class="card-chevron" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
  </svg>`;

// ===== BUILD A CARD =====
function buildCard(item, isGame) {
  const type   = isGame ? 'game' : 'app';
  const page   = isGame ? 'download.html' : 'download.html';
  const cls    = isGame ? 'game' : '';

  const tagsHTML = item.tags
    .map(t => `<span class="tag ${cls}">${t}</span>`)
    .join('');

  return `
    <a class="card ${cls}" href="download.html?type=${type}&id=${item.id}">
      <img class="card-icon" src="${item.image}" alt="${item.name}" />
      <div class="card-body">
        <div class="card-name">${item.name}</div>
        <div class="card-meta ${cls}">${item.meta}</div>
        <div class="card-desc">${item.desc}</div>
        <div class="card-tags">${tagsHTML}</div>
      </div>
      <svg class="card-chevron ${cls}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
      </svg>
    </a>`;
}

// ===== RENDER LISTS =====
function renderLists(query) {
  const q = query.toLowerCase();

  const filteredApps = appsData.filter(a =>
    a.name.toLowerCase().includes(q) ||
    a.tags.some(t => t.toLowerCase().includes(q))
  );

  const filteredGames = gamesData.filter(g =>
    g.name.toLowerCase().includes(q) ||
    g.tags.some(t => t.toLowerCase().includes(q))
  );

  const appsList  = document.getElementById('appsList');
  const gamesList = document.getElementById('gamesList');
  const noApps    = document.getElementById('noApps');
  const noGames   = document.getElementById('noGames');

  appsList.innerHTML  = filteredApps.map(a => buildCard(a, false)).join('');
  gamesList.innerHTML = filteredGames.map(g => buildCard(g, true)).join('');

  noApps.style.display  = filteredApps.length  === 0 ? 'block' : 'none';
  noGames.style.display = filteredGames.length === 0 ? 'block' : 'none';
}

// ===== INIT =====
renderLists('');

document.getElementById('searchInput').addEventListener('input', function () {
  renderLists(this.value);
});
