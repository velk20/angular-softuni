import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './types/post';
import { JwtToken } from './types/jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getJwtTokenFromServer(
    username: string,
    password: string
  ): Observable<JwtToken> {
    return this.http.post<JwtToken>(
      `http://localhost:8080/api/v1/auth/authenticate`,
      {
        username,
        password,
      }
    );
  }
}
