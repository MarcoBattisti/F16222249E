import { Injectable } from '@angular/core';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {WorkOffices} from '../../../work-offices';

@Injectable({
  providedIn: 'root'
})
export class WorkOfficesService {

  constructor(private http: HttpClient) { }

  getWorkOffices(apiUrl: string): Observable<WorkOffices[]> {
    return this.http.get<WorkOffices[]>( apiUrl + '/common/work-offices');
  }
}
