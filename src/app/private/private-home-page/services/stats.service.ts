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

  getVisitorsOnline(statsUrl: string): Observable<GenericClicky<SimpleClicky>[]> {
    return this.http.options<GenericClicky<SimpleClicky>[]>( statsUrl + '&type=visitors-online&output=json');
  }
}
