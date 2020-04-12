<?php
session_start();
$servername = "172.17.0.3";
$usernamedb = "root";
$passworddb = "dupa12";
$username = $_SESSION['username'];

$conn = new mysqli($servername, $usernamedb, $passworddb, "csstutorial");

var_dump($_POST);


if(isset($_POST['completion-flexbox'])){
    $query = "UPDATE progress set flexbox=true where username= '$username' ";
    mysqli_query($conn, $query);
}

// przy logowaniu ustawic sesje na te checkmarki, ustawiac w index php jezeli istnieje to je zaznaczyc
// przy rejestracji stworzyc tez tabele progress
?>
