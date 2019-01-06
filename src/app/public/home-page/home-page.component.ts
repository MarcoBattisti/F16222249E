import { Component, OnInit } from '@angular/core';
import {CarouselItem} from './../home-page/models/carousel-item';
import {CarouselItemService} from './../home-page/services/carousel-item.service';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  private carouselItems: CarouselItem[];

  private env = this.appComponent.env;

  constructor(private carouselItemService: CarouselItemService, private appComponent: AppComponent) { }

  ngOnInit() {
    this.getCarouselItems();
  }

  getCarouselItems() {
    this.carouselItemService.getCarouselItems(this.env.apiUrl).subscribe(
      data => { this.carouselItems = data;
                console.log(data[0].backgroundLink); },
      err => console.error(err),
      () => console.log(this.carouselItems)
    );
  }

}
