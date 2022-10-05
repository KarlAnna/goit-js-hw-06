const inputEl = document.querySelector('input')
const dataLengthOfInput = inputEl.getAttribute('data-length')
inputEl.addEventListener('blur', () => {
    if (inputEl.value.length != dataLengthOfInput) {
        inputEl.classList.add('invalid')
    } else {
        inputEl.classList.add('valid')
    }
})