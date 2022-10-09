const mainDiv = document.querySelector('#gameCards')

var buildMovies = ''

const buildSlider = (array) => {
  for (let movie of array) {
    let movies = `
    <a href="./movie.html?${movie.id}" target="blank">
      <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="GTA V" class="postGames" id="${movie.id}">
    </a>
    `


    buildMovies += movies
  }
  console.log(buildMovies)
  return buildMovies
}

export { buildSlider }