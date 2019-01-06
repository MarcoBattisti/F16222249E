import { Component, OnInit, Input } from '@angular/core';
import { TimelineEvent } from './timeline-event';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  colorPattern = new RegExp("#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$");

  @Input() timelineEvents: TimelineEvent[];

  ngOnInit() {
    this.timelineEvents.forEach(timelineEvent =>{
      if(!this.colorIsValid(timelineEvent.color)){
        timelineEvent.color = "#999999";
      }
    });
  }

  private colorIsValid(color: string): boolean {
    return this.colorPattern.test(color);
  }
}
