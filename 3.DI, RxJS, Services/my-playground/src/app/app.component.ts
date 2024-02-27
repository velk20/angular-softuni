import { Component, OnInit } from '@angular/core';
import { User } from './types/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-playground';
  appUsers: User[] = [];

  constructor(private userService: UserService) {
    this.appUsers = userService.users;
  }

  //*with fetch
  // ngOnInit(): void {
  //   this.userService.getUsers().then((users) => {
  //     console.log(users);
  //     this.appUsers = users;
  //   });
  // }

  //* with http client
  ngOnInit(): void {
    this.userService.getUsersWithHttpClient().subscribe((users) => {
      console.log(users);
      this.appUsers = users;
    });
  }
  setUsers(name: HTMLInputElement, age: HTMLInputElement) {
    this.userService.addUser(name, age);
    //*Additional functionally
  }
  // constructor(private cd: ChangeDetectorRef) {
  //   setTimeout(() => {
  //     this.title = 'Changed from detector';
  //     this.cd.detectChanges();
  //   }, 3000);
  // }
}
