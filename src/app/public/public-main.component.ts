import { Component, OnInit } from '@angular/core';
import {NavbarItem} from './home-page/models/navbar-item';
import {NavbarItemsService} from './home-page/services/navbar-items.service';
import {ApiConfigService} from '../api-config-service';

@Component({
  selector: 'app-public-main',
  templateUrl: './public-main.component.html',
  styleUrls: ['./public-main.component.scss']
})
export class PublicMainComponent implements OnInit {

  private navbarItems: NavbarItem[];

  
  // tslint:disable-next-line:max-line-length
  constructor(private navbarItemService: NavbarItemsService, private apiConfig: ApiConfigService) {}

  getNavbarItems() {
    this.navbarItemService.getNavbarItems(this.apiConfig).subscribe(
      data => { this.navbarItems = data; },
      err => console.error(err),
      () => console.log(this.navbarItems)
    );
  }

  ngOnInit() {
    this.getNavbarItems();
  }

}
