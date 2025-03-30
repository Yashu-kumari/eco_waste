// script.js (EcoWaste Functionality)

document.addEventListener("DOMContentLoaded", function () {
    console.log("EcoWaste script loaded successfully.");

    // Login form functionality
    const loginForm = document.querySelector("form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.querySelector("input[type='text']").value;
            const password = document.querySelector("input[type='password']").value;
            
            if (username === "admin" && password === "admin123") {
                alert("Login successful!");
                window.location.href = "dashboard.html"; // Redirect to dashboard
            } else {
                alert("Invalid credentials. Please try again.");
            }
        });
    }
});
