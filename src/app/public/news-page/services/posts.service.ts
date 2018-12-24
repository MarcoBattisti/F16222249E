import { Injectable } from '@angular/core';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';
import {ApiConfigService} from '../../../api-config-service';
import {Observable} from 'rxjs';
import {CarouselItem} from '../../home-page/models/carousel-item';
import {PostItem} from '../models/post-item';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(apiConfig: ApiConfigService): Observable<PostItem[]> {
    return this.http.get<PostItem[]>( apiConfig.getBaseUrl() + '/news/posts');
  }
}
