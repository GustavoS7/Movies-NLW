// https://api.themoviedb.org/3/movie/76341?api_key=a9d1becf188f6a22b692fe66795e5f4e

// API Key = a9d1becf188f6a22b692fe66795e5f4e

var data
var newData

const api_Url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a9d1becf188f6a22b692fe66795e5f4e'

const getMoviesAPI = async (url) => {
  const response = await fetch(url)
  data = await response.json()

  newData = data.results

  // console.log(data.results[1])

  // console.log(newData)
}

getMoviesAPI(api_Url)

export { newData }