import { Injectable } from '@angular/core';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';
import {ApiConfigService} from '../../../api-config-service';
import {Observable} from 'rxjs';
import {WorkOffices} from '../../../work-offices';

@Injectable({
  providedIn: 'root'
})
export class WorkOfficesService {

  constructor(private http: HttpClient) { }

  getWorkOffices(apiConfig: ApiConfigService): Observable<WorkOffices[]> {
    return this.http.get<WorkOffices[]>( apiConfig.getBaseUrl() + '/common/work-offices');
  }
}
