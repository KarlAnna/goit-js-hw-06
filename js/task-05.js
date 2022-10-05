const inputEl = document.querySelector('input')
const spanEl = document.querySelector('span')
inputEl.addEventListener('input', () => {
    spanEl.textContent = inputEl.value
})