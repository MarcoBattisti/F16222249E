import { Component, OnInit } from '@angular/core';
import {IntroductionService} from './services/introduction.service';
import {Introduction} from './services/models/introduction';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss']
})
export class AboutMePageComponent implements OnInit {

  latestIntroduction: Introduction;

  private env = this.appComponent.env;

  constructor(private introductionsService: IntroductionService, private appComponent: AppComponent) {}

  ngOnInit() {
    this.introductionsService.getIntroductions(this.env.apiUrl).subscribe(data => {
      this.latestIntroduction = data;
    });
  }

}
