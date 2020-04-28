<?php
session_start();
$username=$_SESSION['username'];
$text = $_POST['comment'];
$servername = "172.17.0.3";
$usernamedb = "root";
$passworddb = "dupa12";
$conn = new mysqli($servername, $usernamedb, $passworddb, "csstutorial");


$query = "INSERT INTO notes (username, text) VALUES ('$username', '$text')";
mysqli_query($conn, $query);

header ('Location:../resources/html/profile.php');