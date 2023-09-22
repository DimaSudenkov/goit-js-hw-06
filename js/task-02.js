const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector('ul#ingredients');

const oneLi = document.createElement('li');
oneLi.textContent = ingredients[0];
oneLi.classList.add('item');

const twoLi = document.createElement('li');
twoLi.textContent = ingredients[1];
twoLi.classList.add('item');

const threeLi = document.createElement('li');
threeLi.textContent = ingredients[2];
threeLi.classList.add('item');

const fourLi = document.createElement('li');
fourLi.textContent = ingredients[3];
fourLi.classList.add('item');

const fiveLi = document.createElement('li');
fiveLi.textContent = ingredients[4]
fiveLi.classList.add('item');

const sixLi = document.createElement('li');
sixLi.textContent = ingredients[5];
sixLi.classList.add('item');



container.append(oneLi, twoLi, threeLi, fourLi, fiveLi, sixLi);


console.log('container :>> ', container);