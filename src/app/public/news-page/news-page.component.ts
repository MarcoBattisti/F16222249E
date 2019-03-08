import {Component, OnInit} from '@angular/core';
import {PostItem} from './models/post-item';
import {PostsService} from './services/posts.service';
import {AppComponent} from '../../app.component';
import {Pagination} from './models/pagination';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  private pagination: Pagination;
  private postsArguments: PostItem[];

  private postTopics: string[];

  private listOfPosts: PostItem[];

  private isLoaded = false;
  private mainPostsAreLoaded = false;

  selected: string[];

  private env = this.appComponent.env;

  constructor(private postsService: PostsService, private appComponent: AppComponent) { }

  ngOnInit() {
    this.getPosts(null, this.selected);
    this.getMainPosts();
    this.getTopics();
  }

  getPosts(page: number, filters: string[]) {
    this.postsService.getPosts(this.env.apiUrl, page, filters).subscribe(
      pagination => {
        this.pagination = pagination;
        this.isLoaded = true;
        this.listOfPosts = pagination.data;
        },
      err => console.error(err)
    );
  }

  getMainPosts() {
    this.postsService.getMainPosts(this.env.apiUrl).subscribe(
      posts => {
        this.postsArguments = posts;
        this.mainPostsAreLoaded = true; },
      err => console.error(err)
    );
  }

  getTopics() {
    this.postsService.getTopics(this.env.apiUrl).subscribe(
      topics => {
        this.postTopics = topics;
        },
      err => console.error(err)
    );
  }

  private countOfMainTopic(): number {
      console.log('Total main posts: ' + this.postsArguments.length);
      return this.postsArguments.length;
    }

  private onSelect(val) {
    console.log('on select Method!');
    console.log('val value: ' + val);
    this.getPosts(null, val);
  }

  private isPresentsInList(value): boolean {
      let result = false;
      this.selected.forEach(item => {
        if (value === item) {
          result = true;
        }
      });
      if (result === false) {
        return false;
      }
    return true;
  }

  changePage(page: number) {
    this.getPosts(page, this.selected);
  }
}
