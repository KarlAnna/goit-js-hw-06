const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('ul')
const ingredientsItems = []

ingredients.forEach(element => {
  const newLiEl = document.createElement('li')
  newLiEl.textContent = element
  newLiEl.classList.add('item')
  ingredientsItems.push(newLiEl)
});

listEl.append(...ingredientsItems)