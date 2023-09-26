const items = document.querySelectorAll(".item")
let count = 0;

items.forEach(() => {
  count += 1;
})

console.log('Number of categories: ', count);

items.forEach((item) => {
  const titleText = item.querySelector('h2').textContent;
  const lengthLi = item.querySelectorAll('li').length;

  console.log('Category: ', titleText);
  console.log('Elements: ', lengthLi);
})



