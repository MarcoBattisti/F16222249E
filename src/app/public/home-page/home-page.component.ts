import {Component, OnInit} from '@angular/core';
import {CarouselItem} from './../home-page/models/carousel-item';
import {CarouselItemService} from './../home-page/services/carousel-item.service';
import {AppComponent} from '../../app.component';
import {PostItem} from '../news-page/models/post-item';
import { registerLocaleData } from '@angular/common';
import LocaleIt from '@angular/common/locales/it';
import {IParallaxScrollConfig} from 'ng2-parallaxscroll';
import {PostsService} from '../news-page/services/posts.service';
import {SettingsService} from '../../settings/services/settings.service';
import {Setting} from '../../settings/models/setting';
import {BaseSetting} from '../../settings/models/base-setting';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  settings: Setting[];

  stats: BaseSetting[];

  carouselItems: CarouselItem[];

  carouselIsLoaded = false;

  latestPosts: PostItem[];

  private env = this.appComponent.env;

  parallaxConfig: IParallaxScrollConfig = {
    axis: 'Y',
    speed: -0.3
  };

  constructor(private carouselItemService: CarouselItemService, private postsService: PostsService,
              private settingsService: SettingsService, private appComponent: AppComponent,
              private titleService: Title) {
    this.titleService.setTitle(appComponent.title + ' - Pagina iniziale');
    registerLocaleData(LocaleIt);
  }

  ngOnInit() {
    this.getSettings();
    this.getPersonaStats();
    this.getCarouselItems();
    this.getLatestPosts();
  }

  private getSettings() {
    this.settingsService.getSettingsBySection(this.env.apiUrl, 'home').subscribe(
      data => { this.settings = data; },
      err => console.error(err),
    );
  }

  private getPersonaStats() {
    this.settingsService.getPersonalStats(this.env.apiUrl).subscribe(
      data => { this.stats = data; },
      err => console.error(err),
    );
  }

  getCarouselItems() {
    this.carouselItemService.getCarouselItems(this.env.apiUrl).subscribe(
      data => { this.carouselItems = data; this.carouselIsLoaded = true; },
      err => console.error(err)
    );
  }

  private getLatestPosts() {
    this.postsService.getLatestPosts(this.env.apiUrl, 3).subscribe(
      data => {
        this.latestPosts = data;
      },
      err => console.error(err),
      () => console.log(this.carouselItems)
    );
  }

  findSettingByName(name: string) {
    return this.settings.find(x => x.name === name).value;
  }

  formatIndexAsSeconds(index: number): string {
    return index + 's';
  }
}
