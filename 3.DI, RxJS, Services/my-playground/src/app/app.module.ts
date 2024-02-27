import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, UserItemComponent, UserListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

//* Observables and RxJS
const o = new Observable((observer) => {
  observer.next(100);
  observer.next(101);
  observer.next(102);
  observer.next(103);
});

o.subscribe((data) => {
  console.log('from observable ' + data);
});

//* Promise ->
// - promises are not lazy, code is invoked immediately
// - promises can not be cancelled
const p = new Promise((resolve, reject) => {
  console.log('Promised invoked!');

  setTimeout(() => {
    resolve(111);
  }, 3000);
});

p.then((data) => {
  console.log('from promise');
});

//short syntax
Promise.resolve(123).then((data) => {
  console.log('from promise');
});

//* DEPENDENCY INJECTION
// class Car {
//   model: string;
//   constructor(model: string) {
//     this.model = model;
//   }
// }

// class Wallet {
//   balance = 0;
//   constructor(balance: number) {
//     this.balance = balance;
//   }
// }

// class Person {
//   wallet: Wallet;
//   car: Car;
//   constructor(balance: number, color: string) {
//     this.wallet = new Wallet(balance);
//     this.car = new Car(color);
//   }
// }

// class PersonOptimized {
//   wallet: Wallet;
//   car: Car;
//   constructor(wallet: Wallet, car: Car) {
//     this.wallet = wallet;
//     this.car = car;
//   }
// }

// const pesho = new Person(100, 'VW');
// console.log(pesho.car);
// console.log(pesho.wallet);

// const gosho = new Person(233, 'BMW');
// console.log(gosho.car);
// console.log(gosho.wallet);

// const w = new Wallet(10);
// const c = new Car('blue');
// const newPerson = new PersonOptimized(w, c);
// console.log({ newPerson });
