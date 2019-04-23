import {Component, OnInit, ViewChild} from '@angular/core';
import {EventType} from './event-type.enum';
import {ModalDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  eventType: EventType = EventType.Info;
  title: String;
  body: String;

  @ViewChild('frame') frame: ModalDirective;

  constructor() { }

  ngOnInit() {
  }

  showModal(eventType: EventType, title: String, body: String) {
    this.eventType = eventType;
    this.title = title;
    this.body = body;
    this.frame.show();
  }
}
