import { Genres } from "../model/genre";

export interface Movie{
    id:number,
    backdrop_path:string,
    genres:Genres[]
    homepage:string,
    imdb_id:number,
    original_language:string,
    original_title:string,
    overview:string,
    popularity:number,
    poster_path:string,
    title:string,
    release_date:string,

}