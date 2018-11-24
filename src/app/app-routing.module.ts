import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './public/home-page/home-page.component';
import {PublicMainComponent} from './public/public-main.component';

const routes: Routes = [
  {path: '', component: PublicMainComponent, outlet: 'pageType'},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
