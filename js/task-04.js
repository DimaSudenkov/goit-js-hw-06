const value = document.querySelector("#value");
console.log('value :>> ', value);

let counterValue = 0;

const decrementButton = document.querySelector('button[data-action = "decrement"]');
console.log(decrementButton.dataset.action);

decrementButton.addEventListener('click', handlerClickDecrement);

function handlerClickDecrement() {
  counterValue -= 1;
  value.textContent = `${counterValue}`
}

const incrementButton = document.querySelector('button[data-action = "increment"]');
console.log(incrementButton.dataset.action);

incrementButton.addEventListener('click', handlerClickIncrement);

function handlerClickIncrement() {
  counterValue += 1;
  value.textContent = `${counterValue}`
}
