import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ContactsSubjects} from './contacts-subjects';
import {WorkOffices} from '../../work-offices';
import {WorkOfficesService} from './services/work-offices.service';
import {PostsService} from '../news-page/services/posts.service';
import {ApiConfigService} from '../../api-config-service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  contactSubjects: ContactsSubjects[] = [
    {id: 1, value: 'Prendere Appuntamento'},
    {id: 2, value: 'Chiedere Informazioni'},
    {id: 3, value: 'Altro..'}
  ];

  workOffices: WorkOffices[];

  private pageIsLoaded = true;

  constructor(private workOfficesService: WorkOfficesService, private apiConfig: ApiConfigService) { }

  ngOnInit() {
    this.getWorkOffices();
  }

  getWorkOffices() {
    this.workOfficesService.getWorkOffices(this.apiConfig).subscribe(data => {this.workOffices = data; },
    err => console.error(err));
  }
}
