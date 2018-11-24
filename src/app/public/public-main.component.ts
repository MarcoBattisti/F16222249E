import { Component, OnInit } from '@angular/core';
import {NavbarItem} from './home-page/models/navbar-item';
import {NavbarItemsService} from './home-page/services/navbar-items.service';
import {ApiConfigService} from '../api-config-service';
import {CarouselItem} from './home-page/models/carousel-item';
import {CarouselItemService} from './home-page/services/carousel-item.service';

@Component({
  selector: 'app-public-main',
  templateUrl: './public-main.component.html',
  styleUrls: ['./public-main.component.scss']
})
export class PublicMainComponent implements OnInit {

  private navbarItems: NavbarItem[];

  private carouselItems: CarouselItem[];

  // tslint:disable-next-line:max-line-length
  constructor(private navbarItemService: NavbarItemsService, private carouselItemService: CarouselItemService, private apiConfig: ApiConfigService) {}

  getNavbarItems() {
    this.navbarItemService.getNavbarItems(this.apiConfig).subscribe(
      data => { this.navbarItems = data; },
      err => console.error(err),
      () => console.log(this.navbarItems)
    );
  }

  getCarouselItems() {
    this.carouselItemService.getCarouselItems(this.apiConfig).subscribe(
      data => { this.carouselItems = data; },
      err => console.error(err),
      () => console.log(this.carouselItems)
    );
  }
/*this.navbarItems =    [
  {
    'id': 1,
    'name': 'Home',
    'path': null
  },
  {
    'id': 2,
    'name': 'News',
    'path': null
  },
  {
    'id': 3,
    'name': 'Chi sono',
    'path': 'about-me'
  },
  {
    'id': 4,
    'name': 'Di cosa mi occupo',
    'path': 'sbout-my-work'
  },
  {
    'id': 5,
    'name': 'Contatti',
    'path': 'contacts'
  }
];*/

  ngOnInit() {
    this.getNavbarItems();
    this.getCarouselItems();
  }

}
