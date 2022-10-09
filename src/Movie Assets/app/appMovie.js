import { getMovie } from "./apiMovie.js";

const atualUrl = document.URL
let url = atualUrl.substring(37)
console.log(url)

const data = await getMovie(url)

console.log(data)

const img = document.querySelector('#backdropImg')
const movieTitle = document.querySelector('#movieTitle')
const descripition = document.querySelector('#movieDescripition')
const subTitle = document.querySelector('#subTitle')
const genre = document.querySelector('#genre')
const averageVote = document.querySelector('#averageVote')

let backDrop = `https://image.tmdb.org/t/p/original${data.backdrop_path}`


img.src = backDrop
movieTitle.innerHTML = data.title.toUpperCase()
descripition.innerText = data.overview
subTitle.innerText = `"${data.tagline}"`
genre.innerText = `${data.genres[0].name} , ${data.genres[1].name}`
averageVote.innerHTML = data.vote_average