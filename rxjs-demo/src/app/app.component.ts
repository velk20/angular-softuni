import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  fromEvent,
  map,
  of,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users = [
    { id: '1', name: 'Jacl', isActive: true },
    { id: '2', name: 'Jay', isActive: true },
    { id: '3', name: 'Peter', isActive: true },
    { id: '4', name: 'Angel', isActive: true },
  ];

  user$ = new BehaviorSubject<{ id: string; name: string } | null>(null);

  users$ = of(this.users); // makes Observable

  usernames$ = this.users$.pipe(map((users) => users.map((user) => user.name)));

  filteredUsers$ = this.users$.pipe(
    filter((users) => users.every((user) => user.isActive)),
    map((users) => users.map((user) => user.name))
  );

  data$ = combineLatest([
    this.users$,
    this.usernames$,
    this.filteredUsers$,
  ]).pipe(
    map(([users, usernames, filteredUsers]) => ({
      users,
      usernames,
      filteredUsers,
    }))
  );

  documentClick$ = fromEvent(document, 'click');

  ngOnInit(): void {
    this.documentClick$.subscribe((e) => {
      console.log(e);
    });

    setTimeout(() => {
      this.user$.next({ id: '1', name: 'Jack' });
    }, 2000);

    this.user$.subscribe((user) => {
      console.log(user);
    });
  }
}
