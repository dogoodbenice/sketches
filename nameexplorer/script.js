const nameData = document.getElementById('name-response');
const submitBTN = document.getElementById('submit');

const loadNameFacts = (inputName = michael) => {
  const name_URL = `https://api.agify.io/=${inputName}`;
  fetch(name_URL)
    .then(response => response.json())
    .then(responseJson => {
      for (let { fact } of responseJson) {
        const nameFact = document.createElement('p');
        nameFact.innerText = fact;
        nameData.append(nameFact);
      }
    })
}

const loadNameFactsonload = (inputName = michael) => {
  const name_URL = `https://api.agify.io/=suraj`;
  fetch(name_URL)
    .then(response => response.json())
    .then(responseJson => {
      for (let { fact } of responseJson) {
        const nameFact = document.createElement('p');
        nameFact.innerText = fact;
        nameData.append(nameFact);
      }
    })
}

window.onload = () => {
  loadNameFactsonload();
  console.log('Data returned on page load');
}

submitBTN.addEventListener('click', () => {
    loadNameFacts(jessica);
    console.log('success')
})
