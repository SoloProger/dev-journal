<?php

$connect = mysqli_connect('localhost', 'admin', 'admin', 'dev_journal', '3306');

if (!$connect) {
    die('Error connect to database!');
}

