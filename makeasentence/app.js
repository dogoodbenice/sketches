const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const del = document.getElementById('delete')

let userChoice
const result = []

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
  userChoice = event.target.id
  result.push(userChoice)
  resultDisplay.innerHTML = result.join(' ');
}))

del.addEventListener('click',(event)=>{
  result.pop()
  resultDisplay.innerHTML = result.join(' ');
})
