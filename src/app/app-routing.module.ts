import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './public/home-page/home-page.component';
import {PublicMainComponent} from './public/public-main.component';
import {NewsPageComponent} from './public/news-page/news-page.component';
import {ContactsPageComponent} from './public/contacts-page/contacts-page.component';
import {Error404Component} from './error-pages/error404/error404.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '', component: PublicMainComponent,
  children: [
    {path: 'home', component: HomePageComponent},
    {path: 'news', component: NewsPageComponent},
    {path: 'contacts', component: ContactsPageComponent}
    ]
  },
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
