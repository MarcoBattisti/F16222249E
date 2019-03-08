import { Injectable } from '@angular/core';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {Introduction} from './models/introduction';

@Injectable({
  providedIn: 'root'
})
export class IntroductionService {

  constructor(private http: HttpClient) {}

  getIntroductions(apiUrl: string): Observable<Introduction> {
    return this.http.get<Introduction>( apiUrl + '/about-me/latest-introduction');
  }
}
