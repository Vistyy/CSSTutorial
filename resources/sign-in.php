<?php

$username=$_POST["username"];
$pass = $_POST["pass"];
$data = get_data($username);
$hash = hash_pass($pass, $data["salt"]);
if ($hash == $data["passhash"]){
    session_start();
    session_unset();
    $_SESSION['username'] = $username;
}
else{
    session_start();
    $_SESSION['error']="Wrong username/password";
}
header('Location:../index.php');

function hash_pass($password, $salt){
    $hash = crypt($password,$salt);
    return $hash;
}


function get_data($user){
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
        while($row = $result->fetch_assoc()) {
            $data=array("username"=>$row["username"],"salt"=> $row["salt"],"passhash"=> $row["passhash"]);
        }
        return $data;
    }else{
        session_start();
        session_unset();
        $_SESSION['error']="Wrong username/password";
        header('Location:../index.php');
    }
    
}
