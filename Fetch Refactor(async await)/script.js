/**
 * Fetch Refactor
 * kali ini saya akan refactoring code dari yang
 * awalnya fetch biasa menjadi fetch asycn await.
 * tujuan dari fetch refactor ini adalah agar kode
 * menjadi lebih mudah dibaca dan diperbarui
 */

const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keywoard");
    const movies = await getMovie(inputKeyword.value);
    showMovie(movies);
  } catch (error) {
    alert(error);
  }
});

function getMovie(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=f3d3e8c9&s=" + keyword)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      if (data.Response === "False") {
        throw new Error(data.Error);
      }
      return data.Search;
    });
}

function showMovie(movies) {
  let cards = "";
  movies.forEach((movie) => (cards += showCard(movie)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

/**
 * Event Binding,
 * event binding ini digunakan agar ketika kita
 * click element, maka akan didapatkan detail dari
 * element yang kita klik meskipun ui nya diperbarui.
 * jika tidak menggunakan event binding, element yang
 * ditargetkan langsung oleh user tidak akan
 * didapatkan jika saat pertama kali website nya dijalankan,
 * element terkait tidak ditemukan bahkan setelah ui nya diperbarui
 */

/**Error Handling
 * bertujuan agar ketika website tidak
 * berjalan sesuai yang diinginkan.
 * kita dapat mengetahui apa yang menyebabkan
 * website kita bermasalah.
 */

document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    try {
      const imdbid = e.target.dataset.imdbid;
      const detailMovie = await getMovieDetail(imdbid);
      console.log(detailMovie);
      updateDetailMovie(detailMovie);
    } catch (error) {
      alert(error);
    }
  }
});

function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=f3d3e8c9&i=" + imdbid)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    })
    .then((m) => {
      if (m.Response === "False") {
        console.log(m.Response);
        throw new Error(m.Response);
      }
      return m;
    });
}

function updateDetailMovie(m) {
  const movieDetail = showMovieDetail(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

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
