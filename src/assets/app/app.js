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



setTimeout(() => {
  console.log(newData)
  testeJs.setAttribute('src', `https://image.tmdb.org/t/p/original${newData[14].poster_path}`)
}, 200)

getMoviesAPI(api_Url)

const publicarAnuncioBtn = document.querySelector('#footerButton')
const formulario = document.querySelector('#formDiv')
const formularioBg = document.querySelector('#formSection')
const cancelarForm = document.querySelector('#cancelBtn')
const submitForm = document.querySelector('#submitBtn')

//Campos do Formulário
const gameSelectorForm = document.querySelector('#gameSelect')
const nicknameForm = document.querySelector('#gameNickname')
const timePlayedForm = document.querySelector('#gameTime')
const discordUserForm = document.querySelector('#gameDiscord')
const hourPerDayFromForm = document.querySelector('#hoursPerDayFrom')
const hourPerDayToForm = document.querySelector('#hoursPerDayTo')

publicarAnuncioBtn.addEventListener('click', () => {
  cleanForm()
})

cancelarForm.addEventListener('click', () => {
  cleanForm()
})

submitForm.addEventListener('click', () => {
  const resultados = {
    gameSelected: document.querySelector('#gameSelect').value,
    nickname: nicknameForm.value,
    timePlayed: timePlayedForm.value,
    discord: discordUserForm.value,
    hoursPerDayFrom: hourPerDayFromForm.value,
    hoursPerDayTo: hourPerDayToForm.value
  }

  console.log(resultados)
  cleanForm()
})

const cleanForm = function () {
  document.querySelector('#gameSelect').value = ''
  nicknameForm.value = ''
  timePlayedForm.value = ''
  discordUserForm.value = ''
  hourPerDayFromForm.value = ''
  hourPerDayToForm.value = ''

  formulario.classList.toggle('disabledd')
  formularioBg.classList.toggle('enabled')
}

const testeJs = document.getElementById('testeImageJs')

