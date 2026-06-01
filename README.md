# 🎬 Siddhant's Watchlist

A personal, browser-based tracker for every movie and TV show — watched, in progress, or yet to be seen. No backend, no login, no database. Just clean HTML, CSS, and vanilla JavaScript.

---

## 📁 Project Structure

```
Watchlist/
├── index.html               # Home — category navigation hub
├── style.css                # Global dark/light theme, shared styles
├── common.js                # Shared utilities (dark mode toggle, etc.)
│
├── EnglishMovies.html       # Film Series (franchises & sequels)
├── script.js                # Data + renderer for Film Series
│
├── EnglishsoloMovies.html   # Non-Series / Standalone Movies
├── scriptsolo.js            # Data + renderer for Solo Movies
│
├── MarvelMovies.html        # Marvel Cinematic Universe — Movies
├── MarvelTvShows.html       # Marvel Cinematic Universe — TV Shows
├── scriptmarvel.js          # Data + renderer for Marvel content
│
├── tvshowsnames.html        # English TV Shows
├── HindiTvShows.html        # Hindi TV Shows
│
├── cartoon.html             # Animation Films
├── Anime.html               # Anime
├── scriptanime.js           # Data + renderer for Anime
│
└── LICENSE.txt
```

---

## 📂 Categories

| Page | What's inside |
|---|---|
| 🎬 Film Series | English movie franchises & sequels |
| 🎥 Non-Series Movies | Standalone English films |
| 🎬 Marvel Movies | Full MCU movie timeline |
| 📺 TV Shows | English TV series with progress tracking |
| 🇮🇳 Hindi TV Shows | Hindi-language series |
| 🎨 Animation Films | Animated / cartoon movies |
| ⚡ Marvel TV Shows | MCU Disney+ and Netflix series |
| ⚡ Anime | Anime series and films |

---

## ✨ Features

- **Watched / Unwatched status** — every entry is marked ✓ or ✗
- **Continue From** — for in-progress TV shows, tracks the exact episode (e.g. `S2E15`)
- **Dark / Light mode** — toggle persists via `localStorage`
- **Data-driven rendering** — movie/show data lives in `.js` files as arrays; HTML pages are just shells. Adding a new entry = one line of JS
- **Zero dependencies** — no frameworks, no build tools, no npm. Open `index.html` and it works

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, grid, animations) |
| Logic | Vanilla JavaScript (ES6+) |
| Hosting | GitHub Pages / any static host |

---

## 🚀 Running Locally

No build step required.

```bash
git clone https://github.com/siddhantbaliyan/Watchlist.git
cd Watchlist
# open index.html in your browser
```

Or just visit the live site if hosted on GitHub Pages.

---

## 🧩 Adding a New Entry

Each category has a dedicated `.js` data file. To add a movie or show, append one object to the array:

**Movie (e.g. `script.js`):**
```js
{ title: "Inception", year: 2010, genre: "Sci-Fi, Thriller", watched: true }
```

**TV Show:**
```js
{ name: "Severance", seasons: 2, episodes: 19, watched: false, continueFrom: "S1E4" }
```

Save the file — the page re-renders automatically on next load.

---

## 📬 Suggestions

Have a recommendation? Send it to [sidaxe43@gmail.com](mailto:sidaxe43@gmail.com)

---

## 📄 License

[MIT](LICENSE.txt) — feel free to fork and build your own watchlist.
