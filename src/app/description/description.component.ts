import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../model/movie';
import { MovieserviceService } from '../service/movieservice.service';
import { Genres } from "../model/genre";
import { Location } from '@angular/common';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  
  constructor(private route:ActivatedRoute,private movieService:MovieserviceService, private location:Location) { }
  
  bookmark=false;
  heart=false;
  isSaved=false;

  genres:Genres[];
  movie:Movie;
  id:number ;
  ngOnInit(): void {
    this.getMovieById();
  }

  getMovieById(){
    this.id =+this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieById(this.id).subscribe(
      data=>{
        this.movie=data;
      
        this.genres =data.genres;
        console.log(`data result ${data}`)
      }
    );
  }
  goBack(): void {
    this.location.back();
  }

  onBookMark(){
    this.bookmark=!this.bookmark;
  }
  onHeartClicked(){
    this.heart=!this.heart;
    this.movieService.saveMovie(this.movie).subscribe(
      (data)=>{
        this.isSaved=data!=null;
      }
    );
  }

  onClikedHeart(){
    
  }

}
