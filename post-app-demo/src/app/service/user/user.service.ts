import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {JwtToken} from "../../types/jwt";
import {HttpClient} from "@angular/common/http";
import {Authentication} from "../../model/authentication";
import {RegisterUser} from "../../model/register";
import {Constants} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getJwtTokenFromServer(auth: Authentication): Observable<JwtToken> {
    return this.http.post<JwtToken>(
      Constants.baseUrl + '/auth/authenticate',
      auth
    );
  }

  registerUser(user: RegisterUser): Observable<JwtToken>{
    return  this.http.post<JwtToken>(
      Constants.baseUrl+'/auth/register',
      user
    );
  }
}
