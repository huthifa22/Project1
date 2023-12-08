function validateSignUp() {
    var errList = '';
    var firstname = document.getElementById("signup-firstname");
    var lastname = document.getElementById("signup-lastname");
    var email = document.getElementById("signup-email");
    var pass = document.getElementById("signup-password");
    var confirmPass = document.getElementById("signup-password2");

    // First Name
    if (firstname.value.length < 1) {
        errList += '<li>Missing first name</li>';
        firstname.classList.add('error');
    }

    // Last Name
    if (lastname.value.length < 1) {
        errList += '<li>Missing last name</li>';
        lastname.classList.add('error');
    }

    // Email
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    if (!email.value.match(emailRegex)) {
        errList += '<li>Invalid or missing email address</li>';
        email.classList.add('error');
    }

    // Password Length
    if (pass.value.length < 8 || pass.value.length > 20) {
        errList += '<li>Password must be between 8 and 20 characters</li>';
        pass.classList.add('error');
    }
    
    // Specials
    var upperRegex = /[A-Z]/; 
    var specialRegex = /[\W_]/; 
    
    // Uppercase and Special Chars
    if (!pass.value.match(upperRegex) || !pass.value.match(specialRegex)) {
        errList += '<li>Password must contain at least one uppercase letter and one special character</li>';
        pass.classList.add('error');
    }
    
    // Password Match
    if (pass.value !== confirmPass.value) {
        errList += '<li>Password and confirmation password do not match</li>';
        confirmPass.classList.add('error');
    }

    var errDiv = document.getElementById("formErrorsSignUp");
    var errors = errList.match(/<li>/g);

    // If error
    if (errList) {
        var errorCount = errors.length;
        errDiv.classList.remove('hide');
        errDiv.innerHTML = '<ul>' + errList + '</ul>';

        // Moving sign in up if theres too many errors
        if (errorCount >= 4 && errorCount < 6) {
            var body = document.querySelector('.signup-body');
            body.style.paddingTop = '50px';
        }else if(errorCount >= 6){
            var body = document.querySelector('.signup-body');
            body.style.paddingTop = '35px';
        }
        return false;
    } else {
        errDiv.classList.add('hide');
        firstname.classList.remove('error');
        lastname.classList.remove('error');
        email.classList.remove('error');
        pass.classList.remove('error');
        confirmPass.classList.remove('error');

        var body = document.querySelector('.signup-body');
        body.style.paddingTop = ''; 
        return true;
    }
}

function validateSignIn() {
    var errDiv = document.getElementById("formErrorsSignIn");
    var url = new URLSearchParams(window.location.search);
    var error = url.get('error');

    // If url has invalid err for signin
    if (error == 'invalid') {
        errDiv.classList.remove('hide');
        errDiv.innerHTML = '<ul><li>Invalid email address or password</li></ul>';

        //Clear url err
        history.replaceState({}, '', 'sign-in.html');
        return false;
    } else {
        errDiv.classList.add('hide');
        return true;
    }
}
function displaySignupError() {
    var errDiv = document.getElementById("formErrorsSignUp");
    var url = new URLSearchParams(window.location.search);
    var error = url.get('error');

    // If url has email in use err or fail
    if (error == 'email_in_use') {
        errDiv.classList.remove('hide');
        errDiv.innerHTML = '<ul><li>Email is already in use</li></ul>';
        // Remove url error
        history.replaceState({}, '', 'sign-up.html');
    } else if (error == 'signup_failed') {
        errDiv.classList.remove('hide');
        errDiv.innerHTML = '<ul><li>Signup failed. Please try again.</li></ul>';
        // Remove url error
        history.replaceState({}, '', 'sign-up.html');
    } else {
        errDiv.classList.add('hide');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var signUpForm = document.getElementById("signup-form");
    if (signUpForm) {
        signUpForm.addEventListener("submit", function(event) {
            if (!validateSignUp()) {
                event.preventDefault(); 
            }
        });
        displaySignupError();
    }
    var signInForm = document.getElementById("signin-form");
    if (signInForm) {
        validateSignIn();
        signInForm.addEventListener("submit", function(event) {
        });
    }
});