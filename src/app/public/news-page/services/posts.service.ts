import { Injectable } from '@angular/core';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {PostItem} from '../models/post-item';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(apiUrl: string): Observable<PostItem[]> {
    return this.http.get<PostItem[]>( apiUrl + '/news/posts');
  }
}
