import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {
  AsyncSubject,
  BehaviorSubject,
  map,
  Observable,
  ReplaySubject,
  Subject,
} from 'rxjs';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

//REFRESHER
const p = new Promise((resolve, reject) => {
  resolve(100);
});

p.then(console.log);

const observable$ = new Observable<number>((observer) => {
  observer.next(103);
  observer.next(104);
  observer.next(105);

  observer.complete();
  observer.error(new Error('Something went wrong'));

  return () => {
    //cleanup!
  };
});

// o$

observable$.pipe(map((n) => n + 1)).subscribe({
  next: console.log,
  error: (err) => console.error(err),
  complete: () => console.log('Complted!'),
});

//!SUBJECTS
const subject$$ = new Subject();
subject$$.subscribe((data) => console.log('Subject A: ', data)); // Subscribe A - listen from here and down
subject$$.next(222);
subject$$.next(333);
subject$$.next(444);

subject$$.subscribe((data) => console.log('Subject B: ', data)); // Subscribe B - listen from here and down
subject$$.next(555);
subject$$.next(666);

setTimeout(() => {
  subject$$.subscribe((data) => console.log('Subject C', data));
  subject$$.next(777);
}, 2000);

//! Behavior SUBJECTS
const bSubject$$ = new BehaviorSubject(1111);
bSubject$$.subscribe((data) => console.log('BehaviorSubject 1: ', data));

setTimeout(() => {
  bSubject$$.next(2222);
  bSubject$$.subscribe((data) => console.log('BehaviorSubject 2: ', data));
}, 2000);

//! Replay SUBJECTS
const rSubject$$ = new ReplaySubject(5); // 5 will get the latest 5 elements from the stream
rSubject$$.next(1000);
rSubject$$.next(1001);
rSubject$$.next(1002);
rSubject$$.next(1003);
rSubject$$.next(1004);
rSubject$$.next(1005);
rSubject$$.next(1006);
rSubject$$.next(1007);
rSubject$$.next(1008);

rSubject$$.subscribe((data) => console.log('ReplaySubject: ', data));

//! Async SUBJECTS
const aSubject$$ = new AsyncSubject(); // Always the last value
aSubject$$.next(1);
aSubject$$.next(2);
aSubject$$.next(3);

aSubject$$.subscribe((data) => console.log('ASYNC: ', data));
aSubject$$.next(4);
aSubject$$.subscribe((data) => console.log('ASYNC: ', data));

aSubject$$.complete(); // This is mandatory
