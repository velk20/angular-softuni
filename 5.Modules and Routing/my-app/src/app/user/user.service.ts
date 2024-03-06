import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../types/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API);
  }
}
