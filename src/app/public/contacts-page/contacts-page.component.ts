import {Component, Input, OnInit} from '@angular/core';
import {ContactsSubjects} from './contacts-subjects';
import {WorkOffices} from '../../work-offices';
import {WorkOfficesService} from './services/work-offices.service';
import {AppComponent} from '../../app.component';
import {SettingsService} from '../../settings/services/settings.service';
import {Setting} from '../../settings/models/setting';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  settings: Setting[];

  workOffices: WorkOffices[];

  private pageIsLoaded = true;

  private env = this.appComponent.env;

  contactSubjects: ContactsSubjects[] = [
    {id: 1, value: 'Prendere Appuntamento'},
    {id: 2, value: 'Chiedere Informazioni'},
    {id: 3, value: 'Altro..'}
  ];

  constructor(private workOfficesService: WorkOfficesService, private appComponent: AppComponent,
              private settingsService: SettingsService,
              private titleService: Title) {
    this.titleService.setTitle(appComponent.title + ' - Contatti');
    this.workOffices = this.workOfficesService.workOffices;
  }

  ngOnInit() {
    this.getSettings();
  }

  private getSettings() {
    this.settingsService.getSettingsBySection(this.env.apiUrl, 'contacts').subscribe(
      data => { this.settings = data; },
      err => console.error(err),
    );
  }

  findSettingByName(name: string) {
    return this.settings.find(x => x.name === name).value;
  }
}
