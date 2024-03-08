import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User, UserForAuth} from "../types/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserForAuth | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }
  constructor(private http: HttpClient) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error){
      this.user = undefined;
    }
  }

  login(){
    this.user = {
      firstName: 'Petko',
      email: 'petkoimava@bv.bg',
      password: '123123',
      phoneNumber: '0878285643'
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout(){
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }

  register(){}
}
