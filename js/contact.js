// TODO create message if the form is sent


const nameField = document.querySelector("#nameField")
const nameError = document.querySelector("#nameError")

const subjectField = document.querySelector("#subjectField")
const subjectError = document.querySelector("#subjectError")

const emailField = document.querySelector("#emailField")
const emailError = document.querySelector("#emailError")

const messageField = document.querySelector("#messageField")
const messageError = document.querySelector("#messageError")

const form = document.querySelector("#form")

function validateForm() {

    event.preventDefault();
    // Function to shorten allt he other validations
    function checkLength(value, length) {
        if (value.trim().length > length) {
            return true
        } else {
            return false
        }
    }

    // RegEX validation for email
    function validateEmail(email) {
        const regEx = /\S+@\S+\.\S+/
        const patternMatches = regEx.test(email)
        return patternMatches
    }

    // Validation of Name Field
    if (checkLength(nameField.value, 5)) {
        nameError.style.display = "none"
    } else {
        nameError.style.display = "block"
    }

    // Validation of Email Field
    if (validateEmail(emailField.value)) {
        emailError.style.display = "none"
    } else {
        emailError.style.display = "block"
    }

    // Validation of Subject Field
    if (checkLength(subjectField.value, 15)) {
        subjectError.style.display = "none"
    } else {
        subjectError.style.display = "block"
    }

    // Validation of Message Field
    if (checkLength(messageField.value, 25)) {
        messageError.style.display = "none"
    } else {
        messageError.style.display = "block"
    }

}




