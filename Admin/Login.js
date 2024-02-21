document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    console.log(username);
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        window.location.href = 'admin.html';

    } else {
        errorMessage.textContent = "Invalid username or password";
    }
});