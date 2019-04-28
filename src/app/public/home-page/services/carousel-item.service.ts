import { Injectable } from '@angular/core';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {CarouselItem} from '../models/carousel-item';

@Injectable({
  providedIn: 'root'
})
export class CarouselItemService {

  constructor(private http: HttpClient) {}

  getCarouselItems(apiUrl: string): Observable<CarouselItem[]> {
    return this.http.get<CarouselItem[]>( apiUrl + '/home/carousel-items');
  }
}
