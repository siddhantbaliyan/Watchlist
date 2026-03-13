 const movies = [ { title: "Iron Man 1", year: 2008, genre: "Action, Sci-Fi", watched: true },
        { title: "Iron Man 2", year: 2010, genre: "Action, Sci-Fi", watched: true },
        { title: "Iron Man 3", year: 2013, genre: "Action, Sci-Fi", watched: true },
        { title: "Avengers 1", year: 2012, genre: "Action, Adventure", watched: true },
        { title: "Avengers 2: Age of Ultron", year: 2015, genre: "Action, Adventure", watched:true  },
        { title: "Avengers 3: Infinity War", year: 2018, genre: "Action, Adventure", watched: true },
        { title: "Avengers 4: Endgame", year: 2019, genre: "Action, Adventure", watched: true },
        { title: "Avengers 5: Doomsday", year: 2026, genre: "Action, Sci-Fi", watched: false },
        { title: "Avengers 6: Secret Wars", year: 2027, genre: "Action, Sci-Fi", watched: false },
        { title: "The Incridible Hulk", year: 2008, genre: "Action, Sci-Fi", watched: true },
        { title: "Captain America 1: The First Avenger", year: 2011, genre: "Action, Adventure", watched: true },
        { title: "Captain America 2: The Winter Soldier", year: 2014, genre: "Action, Adventure", watched: true },
        { title: "Captain America 3: Civil War", year: 2016, genre: "Action, Adventure", watched: true },
        { title: "Captain America 4: Brave New World", year: 2024, genre: "Action, Adventure", watched: true },
        { title: "Thor 1", year: 2011, genre: "Action, Fantasy", watched: true },
        { title: "Thor 2: The Dark World", year: 2013, genre: "Action, Fantasy", watched:true  },
        { title: "Thor 3: Ragnarok", year: 2017, genre: "Action, Fantasy", watched:true },
        { title: "Thor 4: Love and Thunder", year: 2022, genre: "Action, Fantasy", watched: true },
        { title: "Black Panther 1", year: 2018, genre: "Action, Adventure", watched: true },
        { title: "Black Panther 2: Wakanda Forever", year: 2022, genre: "Action, Adventure", watched: true },
        { title: "Guardians of the Galaxy Vol 1", year: 2014, genre: "Action, Sci-Fi", watched: true },
        { title: "Guardians of the Galaxy Vol 2", year: 2017, genre: "Action, Sci-Fi", watched: true},
        { title: "Guardians of the Galaxy Vol 3", year: 2023, genre: "Action, Sci-Fi", watched: true },
        { title: "Doctor Strange 1", year: 2016, genre: "Action, Fantasy", watched: true },
        { title: "Doctor Strange 2: Multiverse of Madness", year: 2022, genre: "Action, Fantasy", watched: true },
        { title: "Ant-Man 1", year: 2015, genre: "Action, Sci-Fi", watched: true },
        { title: "Ant-Man and the Wasp 2", year: 2018, genre: "Action, Sci-Fi", watched: true },
        { title: "Ant-Man and the Wasp 3: Quantumania", year: 2023, genre: "Action, Sci-Fi", watched: true },
        { title: "Captain Marvel", year: 2019, genre: "Action, Adventure", watched: true },
        { title: "The Marvels", year: 2023, genre: "Action, Sci-Fi", watched: true },
        { title: "Spiderman 1: Homecoming", year: 2017, genre: "Action, Adventure", watched: true },
        { title: "Spiderman 2: Far From Home", year: 2019, genre: "Action, Adventure", watched: true },
        { title: "Spiderman 3: No Way Home", year: 2021, genre: "Action, Adventure", watched:true },
        { title: "Spiderman 4: Brand New Day", year: 2026, genre: "Action, Adventure", watched:false },
        { title: "Black Widow", year: 2021, genre: "Action, Adventure", watched: true },
        { title: "Eternals", year: 2021, genre: "Action, Adventure", watched: true },
        { title: "Shang-Chi", year: 2021, genre: "Action, Adventure", watched: true },
        { title: "Fantastic Four : First steps", year: 2025, genre: "Action, Adventure", watched: true },
        { title: "Thunderbolts", year: 2025, genre: "Action, Adventure", watched: true },
        { title: "Blade", year: 2025, genre: "Action, Horror", watched: false },
        { title: "Deadpool 1", year: 2016, genre: "Action, Comedy", watched: true },
        { title: "Deadpool 2", year: 2018, genre: "Action, Comedy", watched:true  },
        { title: "Deadpool & Wolverine", year: 2024, genre: "Action, Comedy", watched:true  },
        { title: "X-Men 1", year: 2000, genre: "Action, Sci-Fi", watched: true},
        { title: "X-Men 2", year: 2003, genre: "Action, Sci-Fi", watched: false },
        { title: "X-Men 3: The Last Stand", year: 2006, genre: "Action, Sci-Fi", watched: false },
        { title: "X-Men 4: Origins Wolverine", year: 2009, genre: "Action, Sci-Fi", watched: false },
        { title: "X-Men 5: First Class", year: 2011, genre: "Action, Sci-Fi", watched: false },
        { title: "X-Men 6: The Wolverine", year: 2013, genre: "Action, Sci-Fi", watched: false },
        { title: "X-Men 7: Days of Future Past", year: 2014, genre: "Action, Sci-Fi", watched: false },
        { title: "X-Men 8: Apocalypse", year: 2016, genre: "Action, Sci-Fi", watched: false },
        { title: "X-Men 9: Logan", year: 2017, genre: "Action, Drama", watched: false },
        { title: "X-Men 10: Dark Phoenix", year: 2019, genre: "Action, Sci-Fi", watched: false },
        { title: "Spiderman 1", year: 2002, genre: "Action, Adventure", watched: true },
        { title: "Spiderman 2", year: 2004, genre: "Action, Adventure", watched: true },
        { title: "Spiderman 3", year: 2007, genre: "Action, Adventure", watched: true },
        { title: "Amazing Spiderman 1", year: 2012, genre: "Action, Adventure", watched: true },
        { title: "Amazing Spiderman 2", year: 2014, genre: "Action, Adventure", watched: true },
        { title: "Madame Web", year: 2024, genre: "Action, Adventure", watched: false },
        { title: "Morbius", year: 2022, genre: "Action, Horror", watched: false },
        { title: "Venom", year: 2018, genre: "Action, Sci-Fi", watched: false },
        { title: "Venom 2: Let There Be Carnage", year: 2021, genre: "Action, Sci-Fi", watched: false },
        { title: "Venom 3: The Last Dance ", year: 2024, genre: "Action, Sci-Fi", watched: false },
        { title: "Kraven the Hunter", year: 2024, genre: "Action, Adventure", watched: false },
        { title: "Fantastic Four (2005)", year: 2005, genre: "Action, Adventure", watched: false },
        { title: "Fantastic Four 2: Rise of the Silver Surfer", year: 2007, genre: "Action, Adventure", watched: false },
        { title: "Fantastic Four (2015)", year: 2015, genre: "Action, Adventure", watched: false },
        { title: "Hulk (2003)", year: 2003, genre: "Action, Sci-Fi", watched: false },
        { title: "Ghost Rider", year: 2007, genre: "Action, Fantasy", watched: true},
        { title: "Ghost Rider 2: Spirit of Vengeance", year: 2011, genre: "Action, Fantasy", watched:true  }
        ];


const movieTableBody = document.getElementById('movieTableBody');

function createMovieRow(movie) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${movie.title}</td>
        <td>${movie.year}</td>
        <td>${movie.genre}</td>
        <td class="${movie.watched ? 'watched' : 'unwatched'}">${movie.watched ? 'Watched' : 'Unwatched'}</td>
    `;
    return row;
}

movies.forEach(movie => {
    movieTableBody.appendChild(createMovieRow(movie));
});