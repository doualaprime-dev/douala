<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index(Request $request)
    {
        $posts = Post::with('author')->latest()->get();

        return Inertia::render('Ecommerce/Blog', [
            'posts' => $posts,
        ]);
    }

    public function show(Post $post)
    {
        return Inertia::render('Ecommerce/Show', [
            'post'=> $post->load('author')
        ]);
    }
}
