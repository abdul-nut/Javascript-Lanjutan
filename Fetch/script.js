/**DEEP FETCH
 * fetch merupakan sebuah fungsi javascript untuk mengambil data
 * dari sebuah API berdasarkan URL yang diberikan. fetch ini merupakan fungsi
 * asyncronous(mirip dengan ajax dari jQuery) yang menawarkan peforma lebih cepat
 * dengan tetap menggunakan vanilla javascript namun dengan kode yang lebih singkat.
 * dalam project ini kita akan mengubah ajax jQuery menjadi fetch
 */

const searchButton = document.querySelector(".search-button");
const inputKeyword = document.querySelector(".input-keywoard");

searchButton.addEventListener("click", function () {
  fetch("http://www.omdbapi.com/?apikey=f3d3e8c9&s=" + inputKeyword.value)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.Search;
      let cards = "";
      movies.forEach((movie) => (cards += showCard(movie)));
      const movieContainer = document.querySelector(".movie-container");
      movieContainer.innerHTML = cards;

      const modalDetailButton = document.querySelectorAll(
        ".modal-detail-button"
      );
      modalDetailButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          const imdbid = this.dataset.imdbid;
          fetch("http://www.omdbapi.com/?apikey=f3d3e8c9&i=" + imdbid)
            .then((response) => response.json())
            .then((m) => {
              const movieDetail = showMovieDetail(m);
              const modalBody = document.querySelector(".modal-body");
              modalBody.innerHTML = movieDetail;
            });
        });
      });
    });
});

function showCard(movie) {
  return `<div class="col-md-4 my-3">
                  <div class="card">
                      <img src="${movie.Poster}" class="card-img-top">
                       <div class="card-body">
                          <h5 class="card-title">${movie.Title}</h5>
                          <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
                          <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
                          data-bs-target="#movieDetailModal" data-imdbid= "${movie.imdbID}">Show Details</a>
                      </div>
                  </div>
              </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <img class="img-fluid" src="${m.Poster}">
            </div>
            <div class="col-md">
            <ul class="list-group">
              <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
              <li
                  class="list-group-item"><strong>Director
                      :</strong>${m.Director}</li>
              <li
                  class="list-group-item"><strong>Actors
                      : </strong>${m.Actors}</li>
              <li
                  class="list-group-item"><strong>Writer
                      : </strong>${m.Writer}</li>
              <li class="list-group-item"><strong>Plot
                      :</strong><br>${m.Plot}}</li>
            </ul>
          </div>
        </div>
      </div>`;
}

/**Dalam penggunakan fetch
 * terdapat 2 parameter default dari fetch yaitu
 * resource dan init.
 * isi di dalam resource bisa berupa URL ataupun representasi dari object
 * sedangkan init biasanya konfigurasi tambahan dari sebuah request yang
 * berbentuk object, bisa berbentuk method(get,post,update,delete), body, headers, cache dll.
 * kemudian untuk response sendiri memiliki berbagai property, diantaranya headers, ok, redirect
 * dan beberapa property lainnya
 */
