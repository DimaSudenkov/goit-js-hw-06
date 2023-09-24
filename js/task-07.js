const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener('input', handlerRang);

function handlerRang(evt) {
  const count = evt.currentTarget.value;
  if (evt.currentTarget.value > 0) {
    span.style.fontSize = `${count}px`;
  }
}