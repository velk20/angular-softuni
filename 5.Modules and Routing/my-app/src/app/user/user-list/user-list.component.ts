import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../types/user";
import {UserService} from "../user.service";
import {GlobalLoaderService} from "../../core/global-loader/global-loader.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[] = [];
  isLoading = false;

  constructor(private userService: UserService,
              private globalLoaderService: GlobalLoaderService) {
  }

  ngOnDestroy(): void {
    console.log('on destroy');
  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    //before fetch
    this.globalLoaderService.showLoader();

    //start fetching
    this.userService.getUsers()
      .subscribe((users) => {
        console.log(users);
        this.users = users;

        //after fetched
        this.globalLoaderService.hideLoader();
      });
  }
}
