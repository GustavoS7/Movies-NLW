import { newData } from './api.js'
import { buildSlider } from './buildSlider.js'
const games = document.querySelector('#gameCards')

setTimeout(() => {
  console.log(newData)
  games.innerHTML = buildSlider(newData)
}, 200)


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

