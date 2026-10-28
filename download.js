// ===== READ URL PARAMS =====
const params = new URLSearchParams(window.location.search);
const type   = params.get('type');   // "app" or "game"
const id     = params.get('id');

const isGame = type === 'game';
const item   = isGame
  ? gamesData.find(g => g.id === id)
  : appsData.find(a => a.id === id);

// ===== IF NOT FOUND =====
if (!item) {
  document.body.innerHTML = '<p style="color:white;text-align:center;padding:40px;">Item not found. <a href="index.html" style="color:#00ffc8;">Go Back</a></p>';
  throw new Error('Item not found');
}

// ===== APPLY GAME THEME =====
if (isGame) {
  document.getElementById('downloadCard').classList.add('game');
  document.getElementById('topLine').classList.add('game');
  document.getElementById('appIcon').classList.add('game');
  document.getElementById('appMeta').classList.add('game');
  document.getElementById('backBtn').classList.add('game');
  document.getElementById('countdownNum').classList.add('game');
  document.getElementById('ringProgress').classList.add('game');
}

// ===== FILL CONTENT =====
document.title = item.name + ' - HMTxMODS';
document.getElementById('appIcon').src      = item.image;
document.getElementById('appIcon').alt      = item.name;
document.getElementById('appName').textContent = item.name;
document.getElementById('appMeta').textContent = item.meta;
document.getElementById('appDesc').textContent = item.desc;

const tagsContainer = document.getElementById('appTags');
item.tags.forEach(tag => {
  const span = document.createElement('span');
  span.className = 'download-tag' + (isGame ? ' game' : '');
  span.textContent = tag;
  tagsContainer.appendChild(span);
});

// ===== SET DOWNLOAD LINKS =====
document.getElementById('btnMediafire').href = item.links.mediafire;
document.getElementById('btnMega').href      = item.links.mega;
document.getElementById('btnGdrive').href    = item.links.gdrive;

// ===== COUNTDOWN TIMER =====
let countdown = 10;
const totalDash = 226;
const ringEl    = document.getElementById('ringProgress');
const numEl     = document.getElementById('countdownNum');
const wrapEl    = document.getElementById('countdownWrap');
const linksEl   = document.getElementById('downloadLinks');

function updateRing() {
  const offset = totalDash - (totalDash * countdown) / 10;
  ringEl.style.strokeDashoffset = offset;
}

updateRing();

const timer = setInterval(() => {
  countdown--;
  numEl.textContent = countdown;
  updateRing();

  if (countdown <= 0) {
    clearInterval(timer);
    wrapEl.style.display  = 'none';
    linksEl.style.display = 'flex';
  }
}, 1000);
