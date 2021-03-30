import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MyListComponent } from './my-list/my-list.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  {
    path:'movies', component:MovieComponent
  },
  {
    path:'mylist', component:MyListComponent
  },
  {
    path:'description/:id', component:DescriptionComponent
  },
  {
    path:'**',redirectTo:'/movies', pathMatch:'full'
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
