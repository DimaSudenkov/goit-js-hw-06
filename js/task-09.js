const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color')

button.addEventListener('click', handlerButton);

function handlerButton() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const fun = getRandomHexColor();
  console.log(fun);

  span.textContent = fun;
  body.style.backgroundColor = fun;
}

