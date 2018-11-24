import { Injectable } from '@angular/core';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';
import {ApiConfigService} from '../../../api-config-service';
import {Observable} from 'rxjs';
import {CarouselItem} from '../models/carousel-item';

@Injectable({
  providedIn: 'root'
})
export class CarouselItemService {

  constructor(private http: HttpClient) {}

  getCarouselItems(apiConfig: ApiConfigService): Observable<CarouselItem[]> {
    return this.http.get<CarouselItem[]>( apiConfig.getBaseUrl() + '/home/carousel-items');
  }
}
