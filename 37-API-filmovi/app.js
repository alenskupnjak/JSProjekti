const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=276f852e1c37b58951d5e2471af5a0e6&page=1';
const API_KEY = '276f852e1c37b58951d5e2471af5a0e6';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=276f852e1c37b58951d5e2471af5a0e6&query=';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

async function getMovie(url) {
  const res = await fetch(url);

  const podaci = await res.json();

  showMovies(podaci.results);
}

// GET initial movie prilikom prvog usnimavanja
getMovie(SEARCH_URL + '1');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovie(SEARCH_URL + `${searchTerm}`);
  } else {
    window.location.reload();
  }
});

function showMovies(listaFilmova) {
  main.innerHTML = '';

  listaFilmova.forEach((movie) => {
    const { title, vote_average, poster_path, overview } = movie;

    main.innerHTML += `
    <div class="movie">
    <img  src="${IMG_PATH + poster_path}" alt="Slika">
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h2>Overview</h2>
      ${overview}
    </div>
  </div>
    `;

              //  DRUGO RIJESENJE
              // const movieEl = document.createElement('div');
              // movieEl.classList.add('movie');
              // movieEl.innerHTML = `
              //     <img src="${IMG_PATH + poster_path}" alt="${title}">
              //     <div class="movie-info">
              //   <h3>${title}</h3>
              //   <span class="${getClassByRate(vote_average)}">${vote_average}</span>
              //     </div>
              //     <div class="overview">
              //   <h3>Overview</h3>
              //   ${overview}
              // </div>
              // `;
              // main.appendChild(movieEl);


    // Podaci koje dobijemo
    // adult: false
    // backdrop_path: "/sbqBNJyIRSkiVk7pJdLCUyHXae3.jpg"
    // genre_ids: (2) [18, 10749]
    // id: 416691
    // original_language: "en"
    // original_title: "1 Night"
    // overview: "Thirty-something Elizabeth must decide whether to salvage her disappointing relationship with Drew. Meanwhile, Bea, a worrisome teenager, reconnects with her introverted childhood friend, Andy, at their high school prom. Past and present collide as two couples explore love over the course of one night at a hotel."
    // popularity: 7.818
    // poster_path: "/geYX4v0Jy3PvzFei8QL1educKxh.jpg"
    // release_date: "2016-10-14"
    // title: "1 Night"
    // video: false
    // vote_average: 6.3
    // vote_count: 122
  });
  console.log(listaFilmova);
}

function getClassByRate(vote_average) {
  if (vote_average > 8) {
    return 'green';
  } else if (vote_average > 5) {
    return 'orange';
  } else {
    return 'red';
  }
}
