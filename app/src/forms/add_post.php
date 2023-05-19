<?php
require_once "../database.php";

$title = $_POST['title'];
$description = $_POST['description'];


if ($title !== '' && $description !== '') {
    mysqli_query($connect, "INSERT INTO `posts` (`title`, `description`) VALUES ('$title', '$description')");
    header('Location: ../../blog.php');
} else {
    header('Location: ../../blog.php');
}
