import {Component, OnInit} from '@angular/core';
import {CarouselItem} from './../home-page/models/carousel-item';
import {CarouselItemService} from './../home-page/services/carousel-item.service';
import {AppComponent} from '../../app.component';
import {PostItem} from '../news-page/models/post-item';
import { registerLocaleData } from '@angular/common';
import LocaleIt from '@angular/common/locales/it';
import {IParallaxScrollConfig} from 'ng2-parallaxscroll';
import {PostsService} from '../news-page/services/posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  private carouselItems: CarouselItem[];

  carouselIsLoaded = false;

  private latestPosts: PostItem[];

  private env = this.appComponent.env;

  parallaxConfig: IParallaxScrollConfig = {
    axis: 'Y',
    speed: -0.3
  };

  constructor(private carouselItemService: CarouselItemService, private postsService: PostsService,
              private appComponent: AppComponent) { registerLocaleData(LocaleIt); }

  ngOnInit() {
    this.getCarouselItems();
    this.getLatestPosts();
  }

  getCarouselItems() {
    this.carouselItemService.getCarouselItems(this.env.apiUrl).subscribe(
      data => { this.carouselItems = data; this.carouselIsLoaded = true; },
      err => console.error(err)
    );
  }

  private getLatestPosts() {
    this.postsService.getLatestPosts(this.env.apiUrl, 3).subscribe(
      data => { this.latestPosts = data; },
      err => console.error(err),
      () => console.log(this.carouselItems)
    );
  }
}
