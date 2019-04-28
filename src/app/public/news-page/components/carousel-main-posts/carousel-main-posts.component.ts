import {Component, Input, OnInit} from '@angular/core';
import {PostItem} from '../../models/post-item';

@Component({
  selector: 'app-carousel-main-posts',
  templateUrl: './carousel-main-posts.component.html',
  styleUrls: ['./carousel-main-posts.component.scss']
})
export class CarouselMainPostsComponent implements OnInit {

  @Input() datas: PostItem[];


  constructor() { }

  ngOnInit() {
  }
}
