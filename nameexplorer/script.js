const nameData = document.getElementById('name-response');
const submitBTN = document.getElementById('submit');

const loadNameFacts = (inputName = michael) => {
  const name_URL = `https://api.agify.io/=${inputName}`;
  fetch(name_URL)
    .then(response => response.json())
    console.log(responseJson)
    .then(responseJson => {
      for (let { fact } of responseJson) {
        const nameFact = document.createElement('p');
        nameFact.innerText = fact;
        nameData.append(nameFact);
      }
    })
}

submitBTN.addEventListener('click', () => {
    loadNameFacts(jessica);
    console.log('success')
})
