import {Component, Input, OnInit} from '@angular/core';
import {WorkOffices} from '../../../../work-offices';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  @Input() offices: WorkOffices[];

  constructor() { }

  ngOnInit() {
  }

  public getStreetWithNumber(office: WorkOffices): string {
    return `${office.street}, ${office.number}`;
  }

  public getPostCodeWithCityAndProvince(office: WorkOffices): string {
    return `${office.post_code}, ${office.city}(${office.province})`;
  }
}
