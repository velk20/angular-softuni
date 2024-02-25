import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: '<div id="nav-wrapper">Hello Navigation {{angel}}</div>',
  styles: [''],
})
export class NavComponent {
  angel = 'Angel';
}
