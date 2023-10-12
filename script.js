const password = document.querySelector('[name="password"]');
const cpassword = document.querySelector('[name="cpassword"]');
const error = document.querySelector('.password-error');

function matchPassword() {
    if(cpassword.value) {
        if(password.value != cpassword.value) {
            error.style.display = 'block';
            error.style.color = 'red';
            error.innerHTML = 'Not matching!';
            return false;
        } else {
            error.style.display = 'block';
            error.style.color = 'green';
            error.innerHTML = 'Matching!';
        }
    } else {
        error.style.display = 'none';
    }
}

password.addEventListener('keyup', matchPassword);
cpassword.addEventListener('keyup', matchPassword);