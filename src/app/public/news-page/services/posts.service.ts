import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '../../../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {PostItem} from '../models/post-item';
import {Pagination} from '../models/pagination';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(apiUrl: string, page: number, filters: string[]): Observable<Pagination> {

    const url = '/news/posts';

    // Parameters obj-
    let params: HttpParams = new HttpParams();

    if (page != null && page !== 0) {
      params = params.append('page', page.toString());
    }
    if (filters !== undefined && filters.length > 0) {
      console.log('filters values: ' + filters.toString());
      filters.forEach(filter => {
        console.log('filter in for each: ' + filter);
        params = params.append('filter[]', filter);
      });
    }
    console.log(params.toString());
    return this.http.get<Pagination>( apiUrl + url, {params});
  }

  getMainPosts(apiUrl: string): Observable<PostItem[]> {
    return this.http.get<PostItem[]>( apiUrl + '/news/main-posts');
  }

  getTopics(apiUrl: string): Observable<string[]> {
    return this.http.get<string[]>( apiUrl + '/news/topics');
  }

  getLatestPosts(apiUrl: string, numberOfPosts: number): Observable<PostItem[]> {
    return this.http.get<PostItem[]>( apiUrl + '/news/latest/' + numberOfPosts);
  }

  getPostById(apiUrl: string, id: number): Observable<PostItem> {
    return this.http.get<PostItem>( apiUrl + '/news/' + id);
  }
}
