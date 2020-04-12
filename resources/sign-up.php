<?php

$username=$_POST["username"];
$pass = $_POST["pass"];
$pass2 = $_POST["pass2"];
$servername = "172.17.0.3";
$usernamedb = "root";
$passworddb = "dupa12";
$conn = new mysqli($servername, $usernamedb, $passworddb, "csstutorial");

if($pass != $pass2){
    session_start();
    session_unset();
    $_SESSION['error']="The passwords don't match";
    header('Location:../index.php');

};

check_if_exists($username, $conn);
$salt = gen_salt(15);
$hash = gen_hash($salt,$pass);
upload_to_db($hash, $salt,$username, $conn);
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

function check_if_exists($user,$conn){

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $query = "SELECT * FROM users WHERE username='$user'";
    $result=mysqli_query($conn, $query);
    if ($result->num_rows > 0) {
            session_start();
            session_unset();
            $_SESSION['error']="This username is already in use";
            header('Location:../index.php');
    }
}



function upload_to_db($hash,$salt, $user, $conn){
    

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $query = "INSERT INTO users (username,salt, passhash) VALUES ('$user', '$salt', '$hash')";
    mysqli_query($conn, $query);
}


