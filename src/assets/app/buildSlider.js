const mainDiv = document.querySelector('#gameCards')

var buildMovies = ''

const buildSlider = (array) => {
  for (let movie of array) {
    let movies = `
    <a href="">
      <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="GTA V" class="postGames">
    </a>
    `

    buildMovies += movies
  }
  console.log(buildMovies)
  return buildMovies
}

export { buildSlider }