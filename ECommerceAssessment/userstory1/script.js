// script.js - newsletter form validation

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("email");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop reload
        const emailValue = emailInput.value.trim();

        if (emailValue === "") {
            message.textContent = "Please enter your email address.";
            message.style.color = "red";
        } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
            message.textContent = "Please enter a valid email format.";
            message.style.color = "red";
        } else {
            message.textContent = "Subscribed successfully!";
            message.style.color = "green";
            form.reset();
        }
    });
});
