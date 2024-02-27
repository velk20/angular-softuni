import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    debugger;
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
