<?php
session_start();//starts session
require("Core/connect.php");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  if (isset($_POST['username']) or isset($_POST['password'])){
    $stmt = $conn->query("SELECT * FROM users WHERE username LIKE '".$_POST['username']."'AND password LIKE'".$_POST['password']."';");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $data = $results[0] ;
    if ($data !=null ){
        $_SESSION["id"] = $data['id'];
        //$Data ="No User Found".".".$_SESSION["id"];
        //print_r($Data);
        //echo $Data;
       //echo $Data;
        echo "Views/home.view.php".",".$_SESSION["id"];
    }else{
        echo "No User Found";
        //$Data=array("No User Found",$_SESSION["id"]);
        //echo $Data;
    }
 }
}