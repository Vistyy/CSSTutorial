<?php
var_dump($_POST);
session_start();
$username=$_SESSION['username'];
$text = $_POST['comment'];
$servername = "172.17.0.3";
$usernamedb = "root";
$passworddb = "dupa12";
$conn = new mysqli($servername, $usernamedb, $passworddb, "csstutorial");


$query = "INSERT INTO notes ('username', 'text') VALUES ('$username', '$text')";
echo $query;
mysqli_query($conn, $query);

