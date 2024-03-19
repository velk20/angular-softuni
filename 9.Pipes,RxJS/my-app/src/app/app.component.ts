import { Component } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  user = { name: 'pesho', age: 21, list: [1, 2, 3, 4, 5, 6, 7, 6] };

  sum(acc: number, curr: number): number {
    return acc + curr;
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
}
