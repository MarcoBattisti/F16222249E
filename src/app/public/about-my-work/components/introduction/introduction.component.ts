import { Component, OnInit } from '@angular/core';
import {IParallaxScrollConfig} from 'ng2-parallaxscroll';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  introductionComponents = [
    new IntroComponent(
      'Passione',
      'In tutto ciò che faccio metto l\'amore e la mia grande passione per la psicologia.',
      'fa fa-heart',
      'zoomIn',
      '1s',
      '3',
      'fadeInUp',
      '2.5s',
      '3'
    ),
    new IntroComponent(
      'Attenzione',
      'Il mio obiettivo è aiutare con cura e precisione.',
      'fa fa-eye',
      'zoomIn',
      '1s',
      '3',
      'fadeInUp',
      '2.5s',
      '3'),
    new IntroComponent(
      'Professionalità',
      'Competenza ed efficienza, le due parole fondamentali nel mio operato.',
      'fa fa-handshake-o',
      'zoomIn',
      '1s',
      '3',
      'fadeInUp',
      '2.5s',
      '3')
  ];

  parallaxConfig: IParallaxScrollConfig = {
    axis: 'Y',
    speed: -1.5
  };

  constructor() { }

  ngOnInit() {
  }

}


class IntroComponent {

  title: string;
  paragraph: string;
  icon: string;
  textAnimationEffect: string;
  textAnimationDelay: string;
  textAnimationOffset: string;
  iconAnimationEffect: string;
  iconAnimationDelay: string;
  iconAnimationOffset: string;

  constructor(title: string, paragraph: string, icon: string,
              iconAnimationEffect: string, iconAnimationDelay: string, iconAnimationOffset: string,
              textAnimationEffect: string, textAnimationDelay: string, textAnimationOffset: string) {
    this.title = title;
    this.paragraph = paragraph;
    this.icon = icon;
    this.textAnimationEffect = textAnimationEffect;
    this.textAnimationDelay = textAnimationDelay;
    this.textAnimationOffset = textAnimationOffset;
    this.iconAnimationEffect = iconAnimationEffect;
    this.iconAnimationDelay = iconAnimationDelay;
    this.iconAnimationOffset = iconAnimationOffset;
  }
}
