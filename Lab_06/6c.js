const submit = document.getElementById("submit");
submit.addEventListener("click", validate);

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateNumbers(numbers) {
    const re = /^\d+$/;
    return re.test(numbers);
}

function validate(e) {
    e.preventDefault();

    const numbers = document.getElementById("numbers");
    const email = document.getElementById("email");

    if (validateNumbers(numbers.value)) {
        numbers.style.borderColor = "green";
    } else {
        numbers.style.borderColor = "red";
    }

    if (validateEmail(email.value)) {
        email.style.borderColor = "green";
    } else {
        email.style.borderColor = "red";
    }
    
    return false;
}