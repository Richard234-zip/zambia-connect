// Function to validate login form
function validateLogin() {
    const form = document.getElementById('loginForm');
    const fullname = form.fullname.value.trim();
    const password = form.password.value.trim();

    // Full name validation
    if (fullname.length < 3) {
        alert('Full name must be at least 3 characters long.');
        form.fullname.focus();
        return false;
    }

    // Password validation
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        form.password.focus();
        return false;
    }

    // If all validations pass, submit the form
    form.submit();
}