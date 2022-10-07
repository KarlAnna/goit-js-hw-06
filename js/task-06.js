const inputEl = document.querySelector('input')
const dataLengthOfInput = inputEl.getAttribute('data-length')
inputEl.addEventListener('blur', () => {
    if (inputEl.value.length == dataLengthOfInput) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    } else {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }
})