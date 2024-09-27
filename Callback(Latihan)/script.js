$('.search-button').on('click', function () {

  $.ajax({
    url: "http://www.omdbapi.com/?apikey=f3d3e8c9&s=" + $('.input-keywoard').val(),
    success: (result) => {

      
      const movies = result.Search;
      let cards = "";
      movies.forEach((movie) => {
        cards += showCard(movie);
      });
      $(".movie-container").html(cards);
  
      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=f3d3e8c9&i=" + $(this).data("imdbid"),
          success: (m) => {
            const movieDetail = showMovieDetail(m);
            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
})



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
return`<div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid" src="${m.Poster}">
          </div>
          <div class="col-md">
          <ul class="list-group">
            <li class="list-group-item"><h4>${m.TItle} (${m.Year})</h4></li>
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
