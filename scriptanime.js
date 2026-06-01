const Anime = [
    { title: "Attack on Titan", year: 2013, genre: "Action, Fantasy", watched: true },

];

const AnimeTableBody = document.getElementById('AnimeTableBody');

function createMovieRow(Anime, index) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${Anime.title}</td>
        <td>${Anime.year}</td>
        <td>${Anime.genre}</td>
        <td><span class="${Anime.watched ? 'watched' : 'unwatched'}">${Anime.watched ? '✓ Watched' : '✗ Unwatched'}</span></td>
    `;
    return row;
}

Anime.forEach((Anime, i) => {
    AnimeTableBody.appendChild(createMovieRow(Anime, i));
});
