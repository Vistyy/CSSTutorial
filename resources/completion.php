<?php

session_start();
$username=$_SESSION['username'];

$servername = "172.17.0.3";
$usernamedb = "root";
$passworddb = "dupa12";
$conn = new mysqli($servername, $usernamedb, $passworddb, "csstutorial");



if(isset($_POST['completion-flexbox'])){
   $query = "UPDATE  progress set flexbox=1 WHERE username='$username'";
   mysqli_query($conn, $query);

}
if(isset($_POST['completion-effects'])){
    $query = "UPDATE  progress  set text=1 WHERE username='$username'";
    mysqli_query($conn, $query);
}

if(isset($_POST['completion-anim'])){
    $query = "UPDATE  progress set animations=1 WHERE username='$username'";
    mysqli_query($conn, $query);
}

if(isset($_POST['completion-media'])){
    $query = "UPDATE progress set media=1 WHERE username='$username'";
    mysqli_query($conn, $query);
}
 header('Location:../index.php');

?>