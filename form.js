const registrationForm = document.querySelector(".registration-form");
const formMessage = document.querySelector("#form-message");
const phoneInput = document.querySelector("#phone");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const phoneNumber = phoneInput.value.trim();

    if (!/^\d{10}$/.test(phoneNumber)) {
        formMessage.textContent = "Please enter a valid 10-digit phone number.";
        formMessage.className = "form-message error-message";
        phoneInput.focus();
        return;
    }

    formMessage.textContent = "Your details are ready. Submitting registration...";
    formMessage.className = "form-message success-message";
});

registrationForm.addEventListener("reset", function () {
    formMessage.textContent = "The form has been cleared.";
    formMessage.className = "form-message";
});
