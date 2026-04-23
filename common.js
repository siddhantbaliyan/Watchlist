/* common.js — shared behaviours for all pages */

// ── Dark / Light toggle ──────────────────────────────────────────
// Default is dark; toggle switches to light-mode class
function toggleDarkMode() {
  document.body.classList.toggle('light-mode');
}

// ── Inject search bar above any table ────────────────────────────
function injectSearch() {
  const table = document.querySelector('table');
  if (!table) return;

  const wrap = document.createElement('div');
  wrap.className = 'search-wrap';
  wrap.innerHTML = `<span class="icon">🔍</span>
    <input type="text" id="siteSearch" placeholder="Search titles, genres…" oninput="filterTable(this.value)">`;
  table.parentNode.insertBefore(wrap, table);
}

function filterTable(query) {
  const q = query.toLowerCase();
  const rows = document.querySelectorAll('tbody tr');
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(q) ? '' : 'none';
  });
}

// ── Inject stats bar above any table ─────────────────────────────
function injectStats() {
  const table = document.querySelector('table');
  if (!table) return;

  // gather data from tbody rows
  const rows = Array.from(document.querySelectorAll('tbody tr'));
  let total = 0, watched = 0;

  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    if (cells.length < 2) return; // skip header rows accidentally in tbody
    total++;
    // watched cell has class "watched" and a checkmark, or text "Watched"
    const wCell = row.querySelector('.watched');
    if (wCell && wCell.textContent.trim() !== '') watched++;
  });

  const unwatched = total - watched;
  const pct = total > 0 ? Math.round((watched / total) * 100) : 0;

  const statsBar = document.createElement('div');
  statsBar.className = 'stats-bar';
  statsBar.innerHTML = `
    <div class="stat-card"><div class="val">${total}</div><div class="lbl">Total</div></div>
    <div class="stat-card"><div class="val" style="color:var(--watched-clr)">${watched}</div><div class="lbl">Watched</div></div>
    <div class="stat-card"><div class="val" style="color:var(--unwatched-clr)">${unwatched}</div><div class="lbl">Unwatched</div></div>
    <div class="stat-card"><div class="val">${pct}%</div><div class="lbl">Complete</div></div>
  `;

  const progWrap = document.createElement('div');
  progWrap.className = 'progress-wrap';
  progWrap.innerHTML = `
    <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    <span class="progress-label">${pct}% watched</span>
  `;

  table.parentNode.insertBefore(statsBar, table);
  table.parentNode.insertBefore(progWrap, table);
}

// ── Boot ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  injectStats();
  injectSearch();
});
