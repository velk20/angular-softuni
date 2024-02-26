import { Component } from '@angular/core';
import { User } from './types/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-playground';
  appUsers: User[] = [];

  constructor(private userService: UserService) {
    this.appUsers = userService.users;
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
