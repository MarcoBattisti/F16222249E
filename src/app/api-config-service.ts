import { Injectable } from '@angular/core';
import {HttpClient} from '../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  apiConfig: ApiConfig;


   constructor(private http: HttpClient) {}

  getJsonConfig() {
    return this.http.get<ApiConfig>('/assets/api_config.json')
      .toPromise()
      .then(data => {
        this.apiConfig = data;
      }).catch(error => {
        console.warn('Error loading api_config.json');
      });
  }

  getBaseUrl(): string {
     return this.apiConfig.host + this.apiConfig.port.toString() + this.apiConfig.context;
  }
}

export class ApiConfig {

  host: string;
  port: number;
  context: string;
}
