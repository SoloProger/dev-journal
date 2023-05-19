<?php

require_once "../database.php";

$id = $_GET['postId'];

if (isset($id)) {
    mysqli_query($connect, "DELETE FROM `posts` WHERE `posts`.`id` = '$id'");
    header('Location: ../../blog.php');
}