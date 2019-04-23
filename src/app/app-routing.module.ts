import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './public/home-page/home-page.component';
import {PublicMainComponent} from './public/public-main.component';
import {NewsPageComponent} from './public/news-page/news-page.component';
import {ContactsPageComponent} from './public/contacts-page/contacts-page.component';
import {Error404Component} from './error-pages/error404/error404.component';
import {AboutMePageComponent} from './public/about-me-page/about-me-page.component';
import {AboutMyWorkComponent} from './public/about-my-work/about-my-work.component';
import {SingleNewsComponent} from './common-components/single-news/single-news.component';

const routes: Routes = [
  // Redirects routes
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // Public routes
  {path: '', component: PublicMainComponent,
    children: [
      {path: 'home', component: HomePageComponent},
      {path: 'news', component: NewsPageComponent},
      {path: 'news/:id', component: SingleNewsComponent},
      {path: 'contacts', component: ContactsPageComponent},
      {path: 'about-me', component: AboutMePageComponent},
      {path: 'about-my-work', component: AboutMyWorkComponent}
      ]
  },
  // Page not found routes
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
