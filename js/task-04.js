let counterValue = 0
const spanEl = document.querySelector('span')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')

decrementBtn.addEventListener('click', () => {
    counterValue -= 1
    spanEl.textContent = counterValue
})

incrementBtn.addEventListener('click', () => {
    counterValue += 1
    spanEl.textContent = counterValue
})

