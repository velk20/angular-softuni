import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../types/post';
import { JwtToken } from '../../types/jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
