<?php

$username=$_POST["username"];
$pass = $_POST["pass"];
$pass2 = $_POST["pass2"];

if($pass != $pass2){
    header ('Location:../index.php');
};

$salt = gen_salt(15);
$hash = gen_hash($salt,$pass);
check_if_exists($username);
upload_to_db($hash, $salt,$username);
 header ('Location:../index.php');


function gen_salt($n){
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    $randomString = ''; 
    for ($i = 0; $i < $n; $i++){ 
        $index = rand(0, strlen($characters) - 1); 
        $randomString .= $characters[$index]; 
    } 
    return $randomString; 
};


function gen_hash($salt, $password){
    $hash = crypt($password,$salt);
    return $hash;
}

function check_if_exists($user){
    $servername = "172.17.0.3";
    $username = "root";
    $password = "dupa12";

    $conn = new mysqli($servername, $username, $password, "csstutorial");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $query = "SELECT * FROM users WHERE username='$user'";
    $result=mysqli_query($conn, $query);
    if ($result->num_rows > 0) {
            session_start();
            session_unset();
            $_SESSION['error']="This username is already used";
            header('Location:../index.php');
    }
}



function upload_to_db($hash,$salt, $user){
    $servername = "172.17.0.3";
    $username = "root";
    $password = "dupa12";

    $conn = new mysqli($servername, $username, $password, "csstutorial");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $query = "INSERT INTO users (username,salt, passhash) VALUES ('$user', '$salt', '$hash')";
    mysqli_query($conn, $query);
}


