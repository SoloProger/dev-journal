<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $categories = Category::factory(5)->create();
        $posts = Post::factory(10)->create();
        $categoryId = $categories->pluck('id');

        $posts->each(function ($post) use ($categoryId) {
            $post->categories()->attach($categoryId->random(3));
        });
    }
}
