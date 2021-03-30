import { Component, OnInit } from '@angular/core';
import {Movie} from '../model/movie';
import { MovieserviceService} from '../service/movieservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  
  movies:Movie[];

  constructor(private movieService: MovieserviceService, private router:Router) { }

  ngOnInit(): void {
      this.getMovies();
    }

  getMovies(){
    this.movieService.getMovies().
    subscribe(
      data=>{
       this.movies=data['results'];
       console.log("data "+ this.movies[0].title);
      },
      error=>console.error(`error ${error}`)
    );
   }

   itemClicked(id:number)
   {
     console.log("id number "+id);
     this.router.navigateByUrl('/description/'+id);
   }
}
