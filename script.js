const formEl = document.querySelector('form')

const errorText = document.querySelector('.error-text')

const pass = document.querySelector('#password');
const cpass = document.querySelector('#cpassword');

function checkValiditiy(first, second) {
    return first === second;
}

formEl.addEventListener('submit', (e) => {
    if (!checkValiditiy(pass.value, cpass.value)) {
        e.preventDefault();
        pass.classList.add('error');
        cpass.classList.add('error');
        errorText.textContent = '* Password do not match'
    }
})

for (let el of [pass, cpass]) {
    el.addEventListener('input', () => {
        if (!checkValiditiy(pass.value, cpass.value)) {
            pass.classList.add('error');
            cpass.classList.add('error');
            errorText.textContent = '* Password do not match'

        } else {
            pass.classList.remove('error');
            cpass.classList.remove('error');
            errorText.textContent = ''
        }
    })
}

