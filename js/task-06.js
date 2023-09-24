const validationInput = document.querySelector("#validation-input");

const dataLength = validationInput.dataset.length;

validationInput.addEventListener('blur', handlerLetters);

function handlerLetters(event) {
  if (event.currentTarget.value.length === Number(dataLength)) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");

  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
}
