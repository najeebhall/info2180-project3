<?php
$servername = getenv('IP');//connects to database
    $username = getenv('C9_USER');
    $password = "";
    $database = "projdb";

    // Create connection
    $conn = new PDO("mysql:host=$host;dbname=$database", $username, $password);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $db->connect_error);
    }

    