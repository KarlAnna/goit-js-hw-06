const inputEl = document.querySelector('input')
const spanEl = document.querySelector('span')
inputEl.addEventListener('input', () => {
    spanEl.textContent = inputEl.value
    if (inputEl.value === null || inputEl.value === '') {
        spanEl.textContent = 'Anonymous'
    }
})