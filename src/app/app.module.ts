import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import {WorkOfficesService} from './public/contacts-page/services/work-offices.service';
import { MyWorkInformationsComponent } from './public/about-me-page/components/my-work-informations/my-work-informations.component';
import { AboutMyWorkComponent } from './public/about-my-work/about-my-work.component';
import { IntroductionComponent } from './public/about-my-work/components/introduction/introduction.component';
import { ListOfServicesComponent } from './public/about-my-work/components/list-of-services/list-of-services.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {ParallaxScrollModule} from 'ng2-parallaxscroll';
import { CountoModule } from 'angular2-counto';
import { SingleNewsComponent } from './common-components/single-news/single-news.component';
import { LoginComponent } from './authentication/login/login.component';
import { PrivateMainComponent } from './private/private-main.component';
import { PrivateHomePageComponent } from './private/private-home-page/private-home-page.component';
import {SidebarComponent} from './common-components/sidebar/sidebar.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Angulartics2Module } from 'angulartics2';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const globalSettings: RecaptchaSettings = { siteKey: environment.siteKey };

export function loadOffices(workOfficeService: WorkOfficesService) {
  return () => workOfficeService.getWorkOffices(environment.apiUrl);
}

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
    TimelineComponent,
    MyWorkInformationsComponent,
    AboutMyWorkComponent,
    IntroductionComponent,
    ListOfServicesComponent,
    SingleNewsComponent,
    LoginComponent,
    PrivateMainComponent,
    PrivateHomePageComponent,
    SidebarComponent
  ],
  imports: [
    HttpClientModule,
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
    NgxPageScrollModule,
    ParallaxScrollModule,
    CountoModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circleSwish,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
    }),
    PerfectScrollbarModule,
    FontAwesomeModule,
    Angulartics2Module.forRoot({}),
    NgxChartsModule
  ],
  providers: [
    AppComponent,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    WorkOfficesService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadOffices,
      deps: [WorkOfficesService],
      multi: true
    },
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
