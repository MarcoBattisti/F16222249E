import { Injectable } from '@angular/core';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {IntroductionInformation} from '../models/introduction-information';

@Injectable({
  providedIn: 'root'
})
export class IntroductionInformationsService {

  constructor(private http: HttpClient) {}

  getIntroductionInformations(apiUrl: string): Observable<IntroductionInformation[]> {
    return this.http.get<IntroductionInformation[]>( apiUrl + '/about-my-work/introduction-informations');
  }

}
