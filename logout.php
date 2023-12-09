<?php
// Acess curr session
session_start();

// Delete data in session
session_destroy();

// Deleteing the 'firstname' cookie by setting date to time in past
setcookie("firstname", "", time() - 3600, "/"); 

 //redirect to sign in
header('Location: sign-in.html');

exit();
?>
