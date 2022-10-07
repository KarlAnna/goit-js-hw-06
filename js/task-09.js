const btnEl = document.querySelector('button')
const spanEl = document.querySelector('span')
const body = document.querySelector('body')

btnEl.addEventListener('click', () => {
  const randomColor = getRandomHexColor()
  body.style.backgroundColor = randomColor
  spanEl.textContent = randomColor
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}