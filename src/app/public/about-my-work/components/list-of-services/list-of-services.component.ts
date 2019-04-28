import {Component, Input, OnInit} from '@angular/core';
import {ServicesService} from '../../services/services.service';
import {Service} from '../../models/service';
import {AppComponent} from '../../../../app.component';
import {IParallaxScrollConfig} from 'ng2-parallaxscroll';
import {SettingsService} from '../../../../settings/services/settings.service';
import {Setting} from '../../../../settings/models/setting';

@Component({
  selector: 'app-list-of-services',
  templateUrl: './list-of-services.component.html',
  styleUrls: ['./list-of-services.component.scss']
})
export class ListOfServicesComponent implements OnInit {

  @Input() settings: Setting[];

  listOfServices: Service[];

  private env = this.appComponent.env;

  parallaxConfig: IParallaxScrollConfig = {
    axis: 'Y',
    speed: -1
  };

  constructor(private servicesService: ServicesService, private appComponent: AppComponent) { }

  ngOnInit() {
    this.servicesService.getServices(this.env.apiUrl).subscribe(data => this.listOfServices = data);
  }

  findSettingByName(name: string) {
    return this.settings.find(x => x.name === name).value;
  }

}
