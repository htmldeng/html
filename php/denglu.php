<?php
     $user = $_GET['username'];
     $pass = $_GET['password'];

//     $user = $_POST['username'];
//     $pass = $_POST['password'];


 
    $con = mysqli_connect('localhost','root','123456','qwedc2011');
 
    $sql = "SELECT *  FROM `user` WHERE `username` = '$user' AND `password` = '$pass'";
 
    $res = mysqli_query($con,$sql);
 
    if(!$res){
         die('数据库链接失败' . mysqli_error($con));
    }
 
    $row = mysqli_fetch_assoc($res);
 
    if($row){
         print_r('登录成功');     
    }else{
         print_r('登录失败');
    }

?>