import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-demo-app-16';

  onOutput(value: string) {
    console.log('from parent ', value);
  }
}
