import { Component, OnInit } from '@angular/core';
import {ApiConfigService} from '../../api-config-service';
import {CarouselItem} from './../home-page/models/carousel-item';
import {CarouselItemService} from './../home-page/services/carousel-item.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  private carouselItems: CarouselItem[];

  constructor(private carouselItemService: CarouselItemService, private apiConfig: ApiConfigService) { }

  ngOnInit() {
    this.getCarouselItems();
  }

  getCarouselItems() {
    this.carouselItemService.getCarouselItems(this.apiConfig).subscribe(
      data => { this.carouselItems = data; 
                console.log(data[0].backgroundLink)},
      err => console.error(err),
      () => console.log(this.carouselItems)
    );
  }

}
