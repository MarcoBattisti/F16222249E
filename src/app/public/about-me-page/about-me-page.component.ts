import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';
import {SettingsService} from '../../settings/services/settings.service';
import {Setting} from '../../settings/models/setting';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss']
})
export class AboutMePageComponent implements OnInit {

  section = 'about-me';

  settings: Setting[];

  private env = this.appComponent.env;

  constructor(private settingsService: SettingsService, private appComponent: AppComponent,
              private titleService: Title) {
    this.titleService.setTitle(appComponent.title + ' - Chi sono');
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
