import { Component, OnInit } from '@angular/core';
import {NavbarItem} from './home-page/models/navbar-item';
import {NavbarItemsService} from './home-page/services/navbar-items.service';
import {WorkOffices} from '../work-offices';
import {WorkOfficesService} from './contacts-page/services/work-offices.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-public-main',
  templateUrl: './public-main.component.html',
  styleUrls: ['./public-main.component.scss']
})
export class PublicMainComponent implements OnInit {

  private navbarItems: NavbarItem[];
  private workOffices: WorkOffices[];
  private isDataAvailable: boolean;

  env = this.appComponent.env;


  // tslint:disable-next-line:max-line-length
  constructor(private navbarItemService: NavbarItemsService, private workOfficesService: WorkOfficesService, private appComponent: AppComponent) {}

  getNavbarItems() {
    this.navbarItemService.getNavbarItems(this.env.apiUrl).subscribe(
      data => { this.navbarItems = data;  this.isDataAvailable = true; },
      err => console.error(err)
    );
  }

  getWorkOffices() {
    this.workOfficesService.getWorkOffices(this.env.apiUrl).subscribe(data => {this.workOffices = data; },
    err => console.error(err));
  }

  ngOnInit() {
    this.getNavbarItems();
    this.getWorkOffices();
  }

}
