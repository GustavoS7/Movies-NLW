//const apiMovies_Url = 'https://api.themoviedb.org/3/movie/id?api_key=a9d1becf188f6a22b692fe66795e5f4e'

const getMovie = async (movieId) => {
  let res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a9d1becf188f6a22b692fe66795e5f4e`)
  let data = await res.json()
  return data
}

export { getMovie }