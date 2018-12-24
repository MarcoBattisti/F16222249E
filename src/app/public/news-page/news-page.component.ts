import {Component, OnInit} from '@angular/core';
import {PostItem} from './models/post-item';
import * as _ from 'lodash';
import {ApiConfigService} from '../../api-config-service';
import {PostsService} from './services/posts.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  private postsArguments: PostItem[];

  private postTopics: PostItem[];

  private listOfPosts: PostItem[];

  private isLoaded: boolean;

  selected: string[];

  constructor(private postsService: PostsService, private apiConfig: ApiConfigService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts(this.apiConfig).subscribe(
      data => {
        this.postsArguments = data;
        this.isLoaded = true;
        this.postTopics = this.getDistinctListOfTopic(data);
        this.listOfPosts = data; },
      err => console.error(err),
      () => console.log(this.postsArguments)
    );
  }

  private countOfMainTopic(): number {
    let c = 0;
      this.postsArguments.forEach(post => {
        if (post.main_topic === true || post.main_topic.toString() === '1') {c = c + 1; }
      });
      return c;
    }

    private getDistinctListOfTopic(postsArguments: PostItem[]): PostItem[] {
      postsArguments =  _.uniqBy(postsArguments, 'topic');
      return postsArguments;
    }

  private onSelect(val) {
    console.log(val);
    this.listOfPosts = this.postsArguments;
    if (val.length > 0) {
      this.listOfPosts = this.listOfPosts.filter(x => this.isPresentsInList(x.topic));
    }
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
}
