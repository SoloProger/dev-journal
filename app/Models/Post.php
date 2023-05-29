<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'image'];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function getPreview()
    {
        return Str::limit($this->description, 300);
    }

    public function scopeGetAll($query)
    {
        return $query->with('categories')->orderBy('created_at', 'desc')->get();
    }

    public function scopeLastLimit($query, int $number)
    {
        return $query->with('categories')->orderBy('created_at', 'desc')->take($number)->get();
    }

    public function scopeWithPagination($query, int $number)
    {
        return $query->with('categories')->orderBy('created_at', 'desc')->paginate($number);
    }
}
