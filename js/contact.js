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

    let fieldsValid = 0

    // Validation of Name Field
    if (checkLength(nameField.value, 5)) {
        nameError.style.display = "none"
        fieldsValid++
    } else {
        nameError.style.display = "block"
    }

    // Validation of Email Field
    if (validateEmail(emailField.value)) {
        emailError.style.display = "none"
        fieldsValid++
    } else {
        emailError.style.display = "block"
    }

    // Validation of Subject Field
    if (checkLength(subjectField.value, 15)) {
        subjectError.style.display = "none"
        fieldsValid++
    } else {
        subjectError.style.display = "block"
    }

    // Validation of Message Field
    if (checkLength(messageField.value, 25)) {
        messageError.style.display = "none"
        fieldsValid++
    } else {
        messageError.style.display = "block"
    }

    // If all fields are valid - create a sucess message
    if (fieldsValid === 4) {
        form.innerHTML = `<p style="color: white; font-size: 12px; text-align: center"> Thank you for your message, we will get back to you shortly</p>`
    } else {
        // Fields valid needs to be reset every time it fails, if not you can validate one field and press submit 4 times and the form will be sent.
        fieldsValid = 0
    }

}




