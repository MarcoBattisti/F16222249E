import { Component, OnInit } from '@angular/core';
import {IParallaxScrollConfig} from 'ng2-parallaxscroll';

@Component({
  selector: 'app-about-my-work',
  templateUrl: './about-my-work.component.html',
  styleUrls: ['./about-my-work.component.scss']
})
export class AboutMyWorkComponent implements OnInit {

  parallaxConfig: IParallaxScrollConfig = {
    axis: 'Y',
    speed: -.5
  };
  constructor() { }

  ngOnInit() {
  }

}
