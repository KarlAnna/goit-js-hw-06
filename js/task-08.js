const form = document.querySelector('form')
const emailInputEl = document.querySelector('input[type = email]')
const passwordInputEl = document.querySelector('input[type = password]')

// 1
form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    // 2
    event.preventDefault()
    // 3
    if (
        emailInputEl.value === null || passwordInputEl.value === null
        || emailInputEl.value === '' || passwordInputEl.value === ''
    ) {
        alert('Всі поля мають бути заповнені!')
    }
    // 4
    const formData = new FormData(event.currentTarget)
    // 5
    formData.forEach((value, name) => {
        console.log(name + ': ' + value)
    })
    event.currentTarget.reset()
}

