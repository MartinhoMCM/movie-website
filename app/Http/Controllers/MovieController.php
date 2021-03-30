<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\movie;

class MovieController extends Controller
{
    function save(Request $request){

        $movie =new movie();
        $movie->backdrop_path=$request->backdrop_path;
        $movie->homepage=$request->homepage;
        $movie->imdb_id=$request->imdb_id;
        $movie->overview=$request->overview;
        $movie->title=$request->title;
    
        
       $result= $movie->save();

       return $result?response()->json("New user added to database", 200): response()->json("Something Wrong", 400);
    }

    public function getMovies(){

        $movie=movie::all();
        return response()->json($movie, 200);
    }
}
