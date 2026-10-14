function validate() {
    const inputEmail = document.getElementById('email');

    const regPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    inputEmail.addEventListener('change', () => {
        inputEmail.classList.toggle('error',!regPattern.test(inputEmail.value));
    })
}