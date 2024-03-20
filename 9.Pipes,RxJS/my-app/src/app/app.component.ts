import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    // this.userService.loadUsers().subscribe({
    //   next: (data) => console.log(data),
    //   error: (error) => console.error(error),
    // });
  }

  //! -------------------------PIPES--------------------------------
  user = { name: 'pesho', age: 21, list: [1, 2, 3, 4, 5, 6, 7, 6] };

  sum(acc: number, curr: number): number {
    return acc + curr;
  }

  users$ = this.userService.usersObs$;

  loadUsers() {
    this.userService.loadUsers();
  }
  reloadUsers() {
    this.userService.loadUsers();
  }

  addProperty() {
    (this.user as any).test = 'test1123';

    this.user.list = [...this.user.list, 100];
  }

  p = new Promise((resolve) => {
    setTimeout(() => {
      resolve(1111);
    }, 3000);
  });

  time$ = interval(1000).pipe(map(() => new Date()));
  //! ----------------------END---PIPES--------------------------------
}
