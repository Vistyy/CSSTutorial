<?php

$username=$_POST["username"];
$pass = $_POST["pass"];
$pass2 = $_POST["pass2"];
echo ("$username, $pass, $pass2 <br>");

if($pass != $pass2){
    header ('Location:../index.html');
};

$salt = gen_salt(15);
$hash = gen_hash($salt,$pass);
upload_to_db($hash, $salt,$username);


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

function upload_to_db($hash,$salt, $user){
    $servername = "localhost";
    $username = "root";
    $password = "";

    $conn = new mysqli($servername, $username, $password, "css");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $query = "INSERT INTO users (username,salt, passhash) VALUES ('$user', '$salt', '$hash')";
    mysqli_query($conn, $query);
}


