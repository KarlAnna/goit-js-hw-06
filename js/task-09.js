const btnEl = document.querySelector('button')
const spanEl = document.querySelector('span')
const body = document.querySelector('body')

btnEl.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor()
  spanEl.textContent = getRandomHexColor()
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}