<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $posts = \App\Models\Post::all();
    return Inertia::render('Welcome', ['posts' => $posts]);
});

Route::get('/posts/{post:slug}', [PostController::class, 'show'])->name('posts.show');
