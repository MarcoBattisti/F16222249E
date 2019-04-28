import { Injectable } from '@angular/core';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {Service} from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {}

  getServices(apiUrl: string): Observable<Service[]> {
    return this.http.get<Service[]>( apiUrl + '/about-my-work/services');
  }
}
