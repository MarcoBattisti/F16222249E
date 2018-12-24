import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {EventType} from './event-type.enum';
import {ModalDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() eventType: EventType = EventType.Info;

  @ViewChild('frame') frame: ModalDirective;

  constructor() { }

  ngOnInit() {
  }

  showModal(eventType: EventType) {
    this.eventType = eventType;
    this.frame.show();
  }
}
