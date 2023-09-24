const nameInput = document.querySelector('#name-input');
let nameOutput = document.querySelector('#name-output');
console.log('nameInput :>> ', nameInput);


nameInput.addEventListener('input', handlerInput);

function handlerInput(evt) {

  if (nameInput.value === '') {
    nameOutput.textContent = 'Anonymous'
  } else {
    nameOutput.textContent = evt.currentTarget.value
  }
}
