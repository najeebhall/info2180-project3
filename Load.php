<?php
session_start();
require("Core/connect.php");



$stmt = $conn->query('SELECT * FROM users');
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo '<ul>';
foreach ($results as $row) {
    if($row['id']!=$_SESSION['id'] && $row['id']!=1  ){// prevents use from messaging themselves and the admin
        echo '<li class="Contact Hover">' . $row['username']. '</li>';
    }
}
echo '</ul>';
