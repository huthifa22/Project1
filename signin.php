<?php
include 'db_connect.php';
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Checking login in MySQL
    $result = $conn->query("SELECT * FROM users WHERE email = '$email' AND password = '$password'");

    // If found ( > 0)
    if ($result->num_rows > 0) {

        // Getting that row
        $row = $result->fetch_assoc();

        // Later to use firstname 
        $_SESSION['firstname'] = $row['firstname']; 

        // Logged in
        $_SESSION['loggedin'] = true;

        // Set a cookie for firstname, 5 days
        setcookie("firstname", $_SESSION['firstname'], time() + (86400 * 5), "/"); 

        // Back to homepage after login
        header('Location: CodeRecall.html?loggedin=true');
        exit();
    } else {
        // Sign in again with regex errs
        header('Location: sign-in.html?error=invalid');
        exit();
    }
    $conn->close();
}
?>
