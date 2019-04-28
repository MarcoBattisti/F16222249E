import { Component, OnInit, Input } from '@angular/core';
import { TimelineEvent } from './model/timeline-event';
import {TimelineService} from './service/timeline-service';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  env = this.appComponent.env;
  template = './timeline.component.scrolleffect';

  colorPattern = new RegExp('#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$');

  timelineEvents: TimelineEvent[];

  constructor(private timelineService: TimelineService, private appComponent: AppComponent) {}

  ngOnInit() {

    this.timelineService.getTimelineEvents(this.env.apiUrl).subscribe(data => {
      this.timelineEvents = data;
      this.timelineEvents.forEach(timelineEvent => {
        if (!this.colorIsValid(timelineEvent.color)) {
          timelineEvent.color = '#999999';
        }
      });
    });
  }

  private colorIsValid(color: string): boolean {
    return this.colorPattern.test(color);
  }
}
