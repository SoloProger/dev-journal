<?php

function getPosts($connect)
{
    $posts = mysqli_query($connect, "SELECT * FROM `posts`");

    $postsList = [];

    while ($post = mysqli_fetch_assoc($posts)) {
        $postsList[] = $post;
    }

    return $postsList;
}

function getLatestPosts($connect)
{
    $posts = mysqli_query($connect, "SELECT * FROM `posts` ORDER BY `created_at` DESC LIMIT 3");

    $postsList = [];

    while ($post = mysqli_fetch_assoc($posts)) {
        $postsList[] = $post;
    }

    return $postsList;
}

function getPost($connect, $id)
{
    $post = mysqli_query($connect, "SELECT * FROM `posts` WHERE `id` = '$id'");

    if (!$post) {
        return null;
    } else {
        return mysqli_fetch_assoc($post);
    }
}