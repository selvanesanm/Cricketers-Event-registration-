const buttons = document.querySelectorAll(".tab-button");
const forms = document.querySelectorAll(".auth-form");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        const formId = button.getAttribute("data-form");

        forms.forEach(function (form) {
            form.classList.add("hidden");
        });

        document.getElementById(formId).classList.remove("hidden");

        buttons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");
    });
});

forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        form.querySelector(".form-message").textContent = "Form submitted successfully.";
    });
});
