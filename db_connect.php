<?php
$conn = new mysqli("localhost", "root", "", "user_db");

if ($conn->connect_error) {
    printf("Connection Failed");
    exit();
}