import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {UserForAuth} from "../../types/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: UserForAuth | undefined = {} as UserForAuth;
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.user;
  }

}
