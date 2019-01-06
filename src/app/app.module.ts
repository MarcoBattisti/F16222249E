import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomePageComponent } from './public/home-page/home-page.component';
import { PublicMainComponent } from './public/public-main.component';
import { NewsPageComponent } from './public/news-page/news-page.component';
import {MainPostsPipe} from './public/news-page/main-posts-pipe';
import { CarouselMainPostsComponent } from './public/news-page/components/carousel-main-posts/carousel-main-posts.component';
import { CardNewsComponent } from './public/news-page/components/card-news/card-news.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactsPageComponent } from './public/contacts-page/contacts-page.component';
import { InformationComponent } from './public/contacts-page/components/information/information.component';
import { ContactComponent } from './public/contacts-page/components/contact/contact.component';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import { ModalComponent } from './common-components/modal/modal.component';
import {RequestInterceptor} from './interceptors/request-interceptor';
import { Error404Component } from './error-pages/error404/error404.component';
import {RECAPTCHA_SETTINGS, RecaptchaModule, RecaptchaSettings} from 'ng-recaptcha';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { environment } from '../environments/environment';
import { RECAPTCHA_NONCE } from 'ng-recaptcha';
import { RECAPTCHA_LANGUAGE } from 'ng-recaptcha';
import { AboutMePageComponent } from './public/about-me-page/about-me-page.component';
import { VerticalTimelineModule } from 'angular-vertical-timeline';
import { TimelineComponent } from './common-components/timeline/timeline.component';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const globalSettings: RecaptchaSettings = { siteKey: environment.siteKey };

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PublicMainComponent,
    NewsPageComponent,
    MainPostsPipe,
    CarouselMainPostsComponent,
    CardNewsComponent,
    ContactsPageComponent,
    InformationComponent,
    ContactComponent,
    ModalComponent,
    Error404Component,
    AboutMePageComponent,
    TimelineComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientXsrfModule.withOptions({cookieName: 'laravel_session', headerName: 'X-XSRF-TOKEN'}),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgSelectModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    SnotifyModule,
    VerticalTimelineModule,
    MatTabsModule,
    BrowserAnimationsModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circleSwish,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
    })
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: globalSettings,
    },
    {
      provide: RECAPTCHA_NONCE,
      useValue: '<nonce-3Svxa5pGra9Lxc6EhcPP6rYXkCNSuXt2YtJBAKdKh4S68NhcgZ>',
    },
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: 'it',
    },
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
