import {Component, Input, OnInit} from '@angular/core';
import {IParallaxScrollConfig} from 'ng2-parallaxscroll';
import {Setting} from '../../../../settings/models/setting';
import {IntroductionInformationsService} from '../../services/introduction-informations.service';
import {AppComponent} from '../../../../app.component';
import {IntroductionInformation} from '../../models/introduction-information';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  @Input() settings: Setting[];

  private env = this.appComponent.env;

  introductionInformations: IntroductionInformation[];

  parallaxConfig: IParallaxScrollConfig = {
    axis: 'Y',
    speed: -1.5
  };

  constructor(private introductionInformationsService: IntroductionInformationsService, private appComponent: AppComponent) { }


  ngOnInit() {
    this.introductionInformationsService.getIntroductionInformations(this.env.apiUrl)
      .subscribe(data => this.introductionInformations = data);
  }

  findSettingByName(name: string) {
    return this.settings.find(x => x.name === name).value;
  }

}
