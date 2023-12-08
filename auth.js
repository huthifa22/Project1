window.onload = function() {
    // Split the cookie string
    var cookieParts = document.cookie.split('firstname=');

    // Check if the 'firstname' cookie exists
    if (cookieParts.length > 1) {
        // String after 'firstname='
        var afterFirst = cookieParts[1];
        // Split the string at ';' 
        var allAfterFirst = afterFirst.split(';');

        var firstname = allAfterFirst[0];
    }

    // if logged in 
    if (firstname) {
        // Hiding sign in and sign up changing it to firstname
        document.getElementById("userLoggedIn").style.display = "block";
        document.getElementById("username").textContent = firstname;
        document.querySelector(".main-login a[href='sign-in.html']").style.display = "none";
        document.querySelector(".main-login a[href='sign-up.html']").style.display = "none";
    }
};
