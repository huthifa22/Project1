<?php
include 'db_connect.php';
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password']; 

    // Checking if email exists already
    $checkEmail = $conn->query("SELECT * FROM users WHERE email = '$email'");
    if ($checkEmail->num_rows > 0) {
        // Send back with err
        header('Location: sign-up.html?error=email_in_use');
        exit();
    } else {
        // Insert new user
        $sql = "INSERT INTO users (firstname, lastname, email, password) VALUES ('$firstname', '$lastname', '$email', '$password')";
        if ($conn->query($sql) == TRUE) {
            // Set session and cookie
            $_SESSION['firstname'] = $firstname; 
            $_SESSION['loggedin'] = true;

            // Set cookie 5 day
            setcookie("firstname", $firstname, time() + (86400 * 5), "/");

            // Redirect to homepage
            header('Location: CodeRecall.html?loggedin=true');
            exit();
        } else {
            // Try again with err messg
            header('Location: sign-up.html?error=signup_failed');
            exit();
        }
    }
    $conn->close();
} else {
    header('Location: sign-up.html?error=no_post_data');
}
?>
