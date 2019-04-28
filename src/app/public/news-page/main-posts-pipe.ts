import {PostItem} from './models/post-item';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'mainPosts' })
export class MainPostsPipe implements PipeTransform {

  transform(allPosts: PostItem[]) {
    return allPosts.filter(p => p.main_topic === true || p.main_topic.toString() === '1');
  }
}
