<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index()
    {
        $posts = Post::withPagination(4);
        $news = Post::lastLimit(3);
        return view('app', ["posts" => $posts, "news" => $news]);
    }
}
