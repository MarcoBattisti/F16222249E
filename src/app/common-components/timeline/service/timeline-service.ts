import { Injectable } from '@angular/core';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {TimelineEvent} from '../model/timeline-event';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private http: HttpClient) {}

  getTimelineEvents(apiUrl: string): Observable<TimelineEvent[]> {
    return this.http.get<TimelineEvent[]>( apiUrl + '/common/timeline-events');
  }
}
