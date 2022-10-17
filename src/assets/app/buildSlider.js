const mainDiv = document.querySelector('#gameCards')

var buildMovies = ''

const buildSlider = (array) => {
  for (let movie of array) {
    let movies = `
    <a href="./movie.html?id=${movie.id}" target="blank" class='gamesPostersRow'>
      <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="GTA V" class="postGames" id="${movie.id}">
    </a>
    `


    buildMovies += movies
  }
  return buildMovies
}

export { buildSlider }