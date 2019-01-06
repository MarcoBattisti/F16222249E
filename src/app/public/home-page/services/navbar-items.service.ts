import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {NavbarItem} from '../models/navbar-item';

@Injectable({
  providedIn: 'root'
})
export class NavbarItemsService {

  constructor(private http: HttpClient) {}

  getNavbarItems(apiUrl: string): Observable<NavbarItem[]> {
    return this.http.get<NavbarItem[]>( apiUrl + '/home/navbar-items');
  }
}
