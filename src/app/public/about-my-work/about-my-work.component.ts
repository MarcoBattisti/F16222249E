import { Component, OnInit } from '@angular/core';
import {IParallaxScrollConfig} from 'ng2-parallaxscroll';
import {SettingsService} from '../../settings/services/settings.service';
import {ServicesService} from './services/services.service';
import {AppComponent} from '../../app.component';
import {Setting} from '../../settings/models/setting';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about-my-work',
  templateUrl: './about-my-work.component.html',
  styleUrls: ['./about-my-work.component.scss']
})
export class AboutMyWorkComponent implements OnInit {

  section = 'about-my-work';

  settings: Setting[];

  private env = this.appComponent.env;

  parallaxConfig: IParallaxScrollConfig = {
    axis: 'Y',
    speed: -.5
  };
  constructor(private settingsService: SettingsService, private appComponent: AppComponent,
              private titleService: Title) {
    this.titleService.setTitle(appComponent.title + ' - Di cosa mi occupo');
  }

  ngOnInit() {
    this.getSettings();
  }

  private getSettings() {
    this.settingsService.getSettingsBySection(this.env.apiUrl, this.section).subscribe(
      data => { this.settings = data; },
      err => console.error(err),
    );
  }

  findSettingByName(name: string) {
    return this.settings.find(x => x.name === name).value;
  }
}
