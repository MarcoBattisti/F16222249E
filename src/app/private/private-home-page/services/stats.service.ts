import { Injectable } from '@angular/core';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {GenericClicky} from '../models/clicky/generic-clicky';
import {SimpleClicky} from '../models/clicky/simple-clicky';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) {}

  getVisitorsOnline(apiUrl: string): Observable<GenericClicky<SimpleClicky>[]> {
    return this.http.get<GenericClicky<SimpleClicky>[]>( apiUrl + '/stats/users-online');
  }

  getTimeAverage(apiUrl: string): Observable<GenericClicky<SimpleClicky>[]> {
    return this.http.get<GenericClicky<SimpleClicky>[]>( apiUrl + '/stats/time-average');
  }
}
