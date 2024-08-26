const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';

window.onload = (event) => {
  getAPI();
};

const main = document.querySelector(".main");
const search = document.querySelector(".search");

async function getAPI() {
  fetch(API_URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let output = "";
      data.results.forEach(function (item) {
        const voteAverage = item.vote_average.toFixed(1); 
        output += `
        <div class="m-container">
          <div class="m-image">
            <img style="object-fit:cover;" src="${IMG_PATH + item.poster_path}" alt="${item.title}">
          </div>
          <div class="m-content">
            <div class="m-name">${item.title}</div>
            <div class="m-imdb">${voteAverage}</div>
          </div>
          <div class="overview">
            <h3>Overview</h3>
            <p>${item.overview}</p>
          </div>
        </div>`;
      });
      main.innerHTML = output;
    });
}

async function getSearch(keyword) {
  fetch(SEARCH_API +(keyword)) 
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let output = "";
      data.results.forEach(function (item) {
        const voteAverage = item.vote_average.toFixed(1); 
        output += `
        <div class="m-container">
          <div class="m-image">
            <img src="${IMG_PATH + item.poster_path}" alt="${item.title}">
          </div>
          <div class="m-content">
            <div class="m-name">${item.title}</div>
            <div class="m-imdb">${voteAverage}</div>
          </div>
          <div class="overview">
            <h3>Overview</h3>
            <p>${item.overview}</p>
          </div>
        </div>`;
      });
      main.innerHTML = output;
    });
}

document.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    const keyword = search.value;
    getSearch(keyword);
  }
});
