import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {NavbarItem} from '../models/navbar-item';
import {ApiConfigService} from '../../../api-config-service';

@Injectable({
  providedIn: 'root'
})
export class NavbarItemsService {

  constructor(private http: HttpClient) {}

  getNavbarItems(apiConfig: ApiConfigService): Observable<NavbarItem[]> {
    return this.http.get<NavbarItem[]>( apiConfig.getBaseUrl() + '/home/navbar-items');
  }
}
