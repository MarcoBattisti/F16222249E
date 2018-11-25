import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './public/home-page/home-page.component';
import {PublicMainComponent} from './public/public-main.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '', component: PublicMainComponent,
  children: [
    { 
      path: 'home', component: HomePageComponent
     }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
