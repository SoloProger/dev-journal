<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description'];



    public function getDescriptionPreview($limit = 100)
    {
        return Str::limit($this->description, $limit);
    }


    public function formatData()
    {
        return $this->created_at->diffForHumans();
    }


    public function scopeAllPosts($query)
    {
        return $query->orderBy('created_at', 'desc')->get();
    }

    public function scopeLastLimit($query, $number)
    {
        return $query->orderBy('created_at', 'desc')->take($number)->get();
    }


}
