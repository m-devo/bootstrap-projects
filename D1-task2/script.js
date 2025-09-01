(function () {
    "use strict";

    const form = document.getElementById("registerForm");
    const password = document.getElementById("regPassword");
    const confirmPassword = document.getElementById("regConfirmPassword");

    function validatePasswords() {
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity("Passwords do not match");
        } else {
            confirmPassword.setCustomValidity("");
        }
    }

    password.addEventListener("input", validatePasswords);
    confirmPassword.addEventListener("input", validatePasswords);

    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.checkValidity()) {
                input.classList.add("is-valid");
                input.classList.remove("is-invalid");
            } else {
                input.classList.add("is-invalid");
                input.classList.remove("is-valid");
            }
        });
    });

    form.addEventListener(
        "submit",
        (event) => {
            validatePasswords();

            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                alert("Registration successful! Redirecting to login...");
                window.location.href = "login.html";
            }

            form.classList.add("was-validated");
        },
        false
    );
})();
