import { Injectable } from '@angular/core';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {WorkOffices} from '../../../work-offices';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkOfficesService {

  workOffices: WorkOffices[];

  constructor(private http: HttpClient) { }

  getWorkOffices(apiUrl: string): Promise<WorkOffices[]> {
    return this.http.get<WorkOffices[]>( apiUrl + '/common/work-offices').pipe(
      tap(workOffices => {
        this.workOffices = workOffices;
      })
    ).toPromise();
  }
}
