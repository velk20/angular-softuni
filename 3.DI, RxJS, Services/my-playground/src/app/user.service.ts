import { Injectable, OnDestroy } from '@angular/core';
import { User } from './types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  users: User[] = [
    { name: 'Pesho', age: 10 },
    { name: 'Pesho1', age: 130 },
    { name: 'Pesho2', age: 120 },
    { name: 'Pesho3', age: 110 },
  ];

  addUser(name: HTMLInputElement, age: HTMLInputElement) {
    const user: User = {
      name: name.value,
      age: Number(age.value),
    };
    // this.users.push(user);
    this.users = [...this.users, user];
    name.value = '';
    age.value = '';
  }

  ngOnDestroy(): void {
    //detach from events, clear data
    console.log(`Destroyed`);
  }
}
