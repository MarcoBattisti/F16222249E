import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services/services.service';
import {Service} from '../../models/service';
import {CarouselItemService} from '../../../home-page/services/carousel-item.service';
import {AppComponent} from '../../../../app.component';
import {IParallaxScrollConfig} from 'ng2-parallaxscroll';

@Component({
  selector: 'app-list-of-services',
  templateUrl: './list-of-services.component.html',
  styleUrls: ['./list-of-services.component.scss']
})
export class ListOfServicesComponent implements OnInit {

  private env = this.appComponent.env;

  listOfServices: Service[];

  parallaxConfig: IParallaxScrollConfig = {
    axis: 'Y',
    speed: -1
  };

  constructor(private servicesService: ServicesService, private appComponent: AppComponent) { }

  ngOnInit() {
    this.servicesService.getServices(this.env.apiUrl).subscribe(data => this.listOfServices = data);
  }

}
