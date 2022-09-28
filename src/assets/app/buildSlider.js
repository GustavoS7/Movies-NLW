const mainDiv = document.querySelector('#gameCards')

const buildSlider = (array) => {
  for (let movies of array) {
    let movie = `
    <a href="https://image.tmdb.org/t/p/original${movies[14].poster_path}">
      <img src"" alt="GTA V" class="postGames">
    </a>
    `

    mainDiv.appendChild(movie)
  }
}

export { buildSlider }