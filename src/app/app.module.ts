import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomePageComponent } from './public/home-page/home-page.component';
import {ApiConfigService} from './api-config-service';
import { PublicMainComponent } from './public/public-main.component';

const appInitializerFn = (appConfig: ApiConfigService) => {
  return () => {
    return appConfig.getJsonConfig();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PublicMainComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    ApiConfigService, {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [ApiConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
