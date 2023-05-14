<?php


function textLimit(string $text, int $limit, int $length)
{

    if (strlen($text) > $limit) {
        return substr($text, 0, $length) . '...';
    }

}