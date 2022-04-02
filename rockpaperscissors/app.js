const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
  userChoice = event.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1

  if (randomNumber === 1) {
    computerChoice = 'Rock 🪨'
  }
  if (randomNumber === 2) {
    computerChoice = 'Scissors ✂️'
  }
  if (randomNumber === 3) {
    computerChoice = 'Paper 🧻'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'Its a draw!'
  }
  if (computerChoice === 'Rock 🪨' && userChoice === "Paper") {
    result = 'You win!'
  }
  if (computerChoice === 'Rock 🪨' && userChoice === "Scissors") {
    result = 'You lost!'
  }
  if (computerChoice === 'Paper 🧻' && userChoice === "Scissors") {
    result = 'You win!'
  }
  if (computerChoice === 'Paper 🧻' && userChoice === "Rock") {
    result = 'You lose!'
  }
  if (computerChoice === 'Scissors ✂️' && userChoice === "Rock") {
    result = 'You win!'
  }
  if (computerChoice === 'Scissors ✂️' && userChoice === "Paper") {
    result = 'You lose!'
  }
  resultDisplay.innerHTML = result
}
