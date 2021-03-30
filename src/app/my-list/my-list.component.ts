import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieserviceService } from '../service/movieservice.service';
import { Genres } from "../model/genre";
import { Location } from '@angular/common';


@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {


  movies:Movie[];

  constructor(private movieService:MovieserviceService ) { }

  ngOnInit(): void {
    this.getMyList();
  }
  getMyList(){
    this.movieService.getMyList().
    subscribe(
      data=>{
       this.movies=data;
       
      },
      error=>console.error(`error ${error}`)
    );
   }

}
