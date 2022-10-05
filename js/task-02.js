const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(element => {
  // 1
  const newItemEl = document.createElement('li')
  // 2
  newItemEl.textContent = element
  // 3
  newItemEl.classList.add('item')
  // 4
  const listEl = document.querySelector('ul')
  listEl.append(newItemEl)
});