const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener('input', handlerRang);

span.style.fontSize = '53px'

function handlerRang(evt) {
  const count = evt.currentTarget.value;
  if (count > 0) {
    span.style.fontSize = `${count}px`;
  }
  console.log(count);
}