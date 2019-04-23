import { Component, OnInit } from '@angular/core';
import {WorkOffices} from '../../../../work-offices';
import {WorkOfficesService} from '../../../contacts-page/services/work-offices.service';

@Component({
  selector: 'app-my-work-informations',
  templateUrl: './my-work-informations.component.html',
  styleUrls: ['./my-work-informations.component.scss']
})
export class MyWorkInformationsComponent implements OnInit {

  workOffices: WorkOffices[];

  email_section = 'E-MAIL';
  phone_num_section = 'CONTATTI';
  address_section = 'INDIRIZZI';

  constructor(private workOfficesService: WorkOfficesService) {
    this.workOffices = workOfficesService.workOffices;
  }

  ngOnInit() {
  }

}
