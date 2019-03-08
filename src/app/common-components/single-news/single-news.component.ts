import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PostsService} from '../../public/news-page/services/posts.service';
import {AppComponent} from '../../app.component';
import {PostItem} from '../../public/news-page/models/post-item';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.scss']
})
export class SingleNewsComponent implements OnInit {

  id: number;

  private post: PostItem;

  private latestPosts: PostItem[];

  contentsAreLoaded = false;

  private sub: any;

  private env = this.appComponent.env;

  constructor(private route: ActivatedRoute, private postsService: PostsService, private appComponent: AppComponent) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getPostById(this.id);
      this.getLatestPosts();
    });
  }

  getPostById(id: number) {
    this.postsService.getPostById(this.env.apiUrl, id).subscribe(
      post => {
        this.post = post;
      },
      err => console.error(err)
    );
  }

  private getLatestPosts() {
    this.postsService.getLatestPosts(this.env.apiUrl, 10).subscribe(
      data => { this.latestPosts = data; this.contentsAreLoaded = true; },
      err => console.error(err)
    );
  }

}
