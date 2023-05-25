<?php

require_once "../database.php";

$name = $_POST['name'];
$surname = $_POST['surname'];
$password = $_POST['password'];

$login = 'Test';

if ($name !== '' && $surname !== '' && $password !== '') {
    $password = hash('sha256', $password);
    mysqli_query($connect, "INSERT INTO `users` (`id`, `name`, `surname`,  `login`, `password`) VALUES (null, '$name', '$surname', '$login', '$password')");
    header('Location: ../../login.php');
}