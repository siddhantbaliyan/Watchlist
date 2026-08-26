const tvShows = [
    { name: "Friends", seasons: 10, episodes: 236, watched: true, continueFrom: null },
    { name: "The Office", seasons: 8, episodes: 201, watched: true, continueFrom: null },
    { name: "The Big Bang Theory", seasons: 12, episodes: 279, watched: true, continueFrom: null },
    { name: "The Long Road Home", seasons: 1, episodes: 8, watched: true, continueFrom: null },
    { name: "Game of Thrones", seasons: 8, episodes: 73, watched: true, continueFrom: null },
    { name: "Breaking Bad", seasons: 5, episodes: 62, watched: true, continueFrom: null },
    { name: "Money Heist", seasons: 5, episodes: 48, watched: true, continueFrom: null },
    { name: "Dark", seasons: 3, episodes: 26, watched: true, continueFrom: null },
    { name: "Sherlock", seasons: 4, episodes: 13, watched: true, continueFrom: null },
    { name: "Suits", seasons: 9, episodes: 134, watched: true, continueFrom: null },
    { name: "Jack Ryan", seasons: 4, episodes: 30, watched: true, continueFrom: null },
    { name: "The Queen's Gambit", seasons: 1, episodes: 7, watched: true, continueFrom: null },
    { name: "Band of Brothers", seasons: 1, episodes: 10, watched: true, continueFrom: null },
    { name: "That 90's Show", seasons: 3, episodes: 26, watched: true, continueFrom: null },
    { name: "That 70's Show", seasons: 3, episodes: 26, watched: false, continueFrom: null },
    { name: "The Wire", seasons: 5, episodes: 60, watched: true, continueFrom: null },
    { name: "I am Groot", seasons: 2, episodes: 10, watched: true, continueFrom: null },
    { name: "The Punisher", seasons: 2, episodes: 26, watched: true, continueFrom: null },
    { name: "Moon Knight", seasons: 1, episodes: 6, watched: true, continueFrom: null },
    { name: "Loki", seasons: 2, episodes: 12, watched: true, continueFrom: null },
    { name: "Wednesday", seasons: 2, episodes: 16, watched: false , continueFrom: "S2E1" },
    { name: "Cobra Kai", seasons: 6, episodes: 65, watched: false, continueFrom: "S5E7" },
    { name: "IT Crowd", seasons: 4, episodes: 24, watched: false, continueFrom: "S1E4" },
    { name: "Brooklyn Nine-Nine", seasons: 8, episodes: 153, watched: false, continueFrom: "S2E15" },
    { name: "Modern Family", seasons: 11, episodes: 250, watched: false, continueFrom: "S2E5" },
    { name: "Young Sheldon", seasons: 7, episodes: 141, watched: false, continueFrom: "S2E1" },
    { name: "Mom", seasons: 8, episodes: 170, watched: false, continueFrom: "S3E21" },
    { name: "Emily in Paris", seasons: 4, episodes: 40, watched: false, continueFrom: "S2E1" },
    { name: "Daredevil", seasons: 3, episodes: 39, watched: false, continueFrom: null },
    { name: "Chernobyl", seasons: 1, episodes: 5, watched: false, continueFrom: null },
    { name: "How I Met Your Mother", seasons: 9, episodes: 208, watched: false, continueFrom: null },
    { name: "House of the Dragon", seasons: 4, episodes: 34, watched: false, continueFrom: null },
    { name: "A Knight of the seven kingdoms", seasons: 1, episodes: 6, watched: false, continueFrom: null },
    { name: "Better Call Saul", seasons: 6, episodes: 63, watched: false, continueFrom: null },
    { name: "Mindhunters", seasons: 2, episodes: 19, watched: false, continueFrom: null },
    { name: "True Detective", seasons: 4, episodes: 24, watched: false, continueFrom: null },
    { name: "Genius (Season 1)", seasons: 1, episodes: 10, watched: false, continueFrom: null },
    { name: "Two and a Half Men", seasons: 12, episodes: 262, watched: false, continueFrom: null },
    { name: "You", seasons: 4, episodes: 40, watched: false, continueFrom: null },
    { name: "The Sopranos", seasons: 6, episodes: 86, watched: false, continueFrom: null },
    { name: "dexter", seasons: 8, episodes: 96, watched: false, continueFrom: null },
    { name: "The Mentalist", seasons: 7, episodes: 151, watched: false, continueFrom: null },
   
];

const tvTableBody = document.getElementById('tvTableBody');

function createShowRow(show, index) {
    const row = document.createElement('tr');
    const continueCell = show.continueFrom
        ? show.continueFrom
        : (show.watched ? '—' : '—');
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${show.name}</td>
        <td>${show.seasons}</td>
        <td>${show.episodes}</td>
        <td><span class="${show.watched ? 'watched' : 'unwatched'}">${show.watched ? '✓ Watched' : '✗ Unwatched'}</span></td>
        <td>${continueCell}</td>
    `;
    return row;
}

tvShows.forEach((show, i) => {
    tvTableBody.appendChild(createShowRow(show, i));
});
