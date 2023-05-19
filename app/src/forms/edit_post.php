<?php
require_once '../database.php';

$id = $_GET['postId'];
$title = $_POST['title'];
$description = $_POST['description'];

if ($title !== '' && $description !== '') {
    mysqli_query($connect, "UPDATE `posts` SET `title` = '$title', `description` = '$description' WHERE `posts`.`id` = '$id'");
    header('Location: ../../blog.php');
} else {
    header('Location: ../../blog.php');
}