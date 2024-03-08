import { Component } from '@angular/core';
import {UserService} from "../../user/user.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get firstName(): string {
    return this.userService.user?.firstName || '';
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/home']);
  }
  constructor(private userService: UserService,
              private router: Router) {
  }
}
