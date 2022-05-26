import './style.css'
import { gameSteps } from './gameData'
import { GameStep } from './types'

const baseUrl: string = '/src/images/'
const textElement = document.getElementById('text') as HTMLDivElement
const buttonDiv = document.getElementById('option-buttons') as HTMLDivElement
const errorMsgDiv = document.getElementById('errorMsg') as HTMLDivElement
let playerName: string;

function initGame() {
  gameStepReceiver(1)
}

function gameStepReceiver(gameStepId: number) {
  const gameStep = gameSteps.find(gameStep => gameStep.id === gameStepId)

  if (gameStep) {

    if (gameStep.id == 1) {
      savePlayerName(gameStep)
      return
    }

    if (gameStep.options?.input == true) {
      renderGameStepInput(gameStep)
      return
    }

    if (gameStep.options?.img) {
      renderImgGameStep(gameStep)

    } else {
      renderGameStep(gameStep)
    }

  }

}


function savePlayerName(gameStep: GameStep) {
  const submitBtn = document.createElement('button')
  submitBtn.classList.add('btn')
  submitBtn.innerText = gameStep.answers[0].text
  const input = document.createElement('input')
  input.type = 'text'
  const question = document.createElement('h2')
  textElement.innerText = gameStep?.textContent.text
  question.innerText = gameStep.textContent.question
  buttonDiv?.append(input, submitBtn)
  const errorMsgText = document.createElement('p')
  errorMsgDiv.append(errorMsgText)

  textElement.append(question)
  submitBtn.addEventListener('click', () => {

    gameStep?.answers.forEach(answer => {
      if (input.value == '') {
        errorMsgText.style.color = 'red'
        errorMsgText.innerText = 'Vänligen ange ett namn för att starta spelet !'
      } else {
        playerName = input.value
        selectOption(answer)
      }
    });
  })
}

export function renderGameStep(gameStep: GameStep) {
  textElement.innerText = gameStep?.textContent.text
  const question = document.createElement('h2')
  question.innerText = `${gameStep.textContent.question} ${playerName} ?`
  textElement.append(question)
  gameStep?.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    buttonDiv?.append(button)
    button.addEventListener('click', () => selectOption(answer))
  });

}



function renderImgGameStep(gameStep: GameStep) {
  const imgDiv = document.createElement('div')
  imgDiv.classList.add('imgDiv')
  const img = document.createElement('img')
  img.src = baseUrl + gameStep.options?.img
  const question = document.createElement('h2')
  question.innerText = gameStep.textContent.question + '?'
  textElement.innerText = gameStep?.textContent.text
  imgDiv.append(img)
  textElement.append(question, imgDiv)
  gameStep?.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    buttonDiv?.append(button)
    button.addEventListener('click', () => selectOption(answer))
  });

}

function renderGameStepInput(gameStep: GameStep) {
  const imgDiv = document.createElement('div')
  imgDiv.classList.add('imgDiv')
  const submitBtn = document.createElement('button')
  submitBtn.classList.add('btn')
  submitBtn.innerText = 'KÖR!'
  const input = document.createElement('input')
  input.type = 'text'
  const img = document.createElement('img')
  img.src = baseUrl + gameStep.options?.img
  const question = document.createElement('h4')
  textElement.innerText = gameStep?.textContent.text
  question.innerText = gameStep.textContent.question + '?'
  const errorMsgText = document.createElement('p')
  buttonDiv.append(input, submitBtn)
  errorMsgDiv.append(errorMsgText)
  imgDiv.append(img)
  textElement.append(question, imgDiv)

  submitBtn.addEventListener('click', () => {
    gameStep.answers.forEach(answer => {
      if (input.value.toLowerCase() == answer.text.toLowerCase()) {
        selectOption(answer)
      } else {
        errorMsgText.innerText = 'Ange ett giltigt kommando!'
        errorMsgText.style.color = 'red'
      }
    });
  })

}

function selectOption(answer: { text: string, nextStep: number }) {
  const nextStepId: number = answer.nextStep
  buttonDiv?.replaceChildren();
  errorMsgDiv?.replaceChildren();
  gameStepReceiver(nextStepId)
}


initGame();