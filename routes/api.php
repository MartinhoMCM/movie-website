<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;



//Get MyList Movies
Route::get('show', [MovieController::class, 'getMovies']);


//Save the movie inmy list
Route::post('save', [MovieController::class, 'save']);

