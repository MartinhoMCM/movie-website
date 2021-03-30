import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie } from '../model/movie';

const headers = new HttpHeaders()
  .set("Content-Type", "application/json")
  .set( "api_key",'[{"key":"api_key","value":"44867ac454f897a14446966664dbbca2","description":""}]');
 
  const headers1 = new HttpHeaders()
  .set("Content-Type", "application/json")
  .set( "Authorization",'my-auth-token');
const httpOptions = {
  header: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {


  
  movies:Movie[];
  

  movieUrl:string="https://api.themoviedb.org/3/movie/popular?api_key=44867ac454f897a14446966664dbbca2";
  movieByIdUrl:string="https://api.themoviedb.org/3/movie";


  getMovies():Observable<any[]>{
    const movies =this.http.get<any[]>(this.movieUrl)
    .pipe(catchError(this.handleError));
    return movies;
  }

  getMovieById(id:number):Observable<Movie>{
    const movie =this.http.get<Movie>(`${this.movieByIdUrl}/${id}`, {params:new HttpParams().set("api_key","44867ac454f897a14446966664dbbca2")}).pipe(catchError(this.handleError));
    return movie;
  }

  private handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occurred:', error.error.message);
    }
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    return throwError(
      'Something bad happened; please try again later.');
  }
   
  saveMovie(movie:Movie):Observable<Movie>{
    
    return this.http.post<Movie>("http://127.0.0.1:8000/api/save", {
      "backdrop_path":`${movie.backdrop_path}`,
      "homepage":`${movie.homepage}`,
      "imdb_id":`${movie.imdb_id}`,   
       "title":`${movie.title}`,
       "overview":`${movie.overview}`
       
    }, {headers})
    .pipe(
      catchError(this.handleError)
    );
   }
   getMyList():Observable<Movie[]>{
    const movies =this.http.get<Movie[]>("http://127.0.0.1:8000/api/show")
    .pipe(catchError(this.handleError));
    return movies;
  }

  constructor(private http:HttpClient) { }
}
