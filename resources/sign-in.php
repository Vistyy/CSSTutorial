<?php

$username=$_POST["username"];
$pass = $_POST["pass"];
$data = get_data($username);
$hash = hash_pass($pass, $data["salt"]);
if ($hash == $data["passhash"]){
    echo "reee";
}


function hash_pass($password, $salt){
    $hash = crypt($password,$salt);
    return $hash;
}


function get_data($user){
    $servername = "localhost";
    $username = "root";
    $password = "";

    $conn = new mysqli($servername, $username, $password, "css");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $query = "SELECT * FROM users WHERE username='$user'";
    $result=mysqli_query($conn, $query);
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $data=array("username"=>$row["username"],"salt"=> $row["salt"],"passhash"=> $row["passhash"]);
        }
    }
    return $data;
}
