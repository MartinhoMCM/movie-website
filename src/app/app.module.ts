import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieComponent } from './movie/movie.component';
import { MyListComponent } from './my-list/my-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { DescriptionComponent } from './description/description.component';

const headers = new HttpHeaders()
  .set("Content-Type", "application/json")
  .set( "api_key",'[{"key":"api_key","value":"44867ac454f897a14446966664dbbca2","description":""}]');


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MyListComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
