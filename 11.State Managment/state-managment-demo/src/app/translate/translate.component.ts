import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateState } from './translate.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css'],
})
export class TranslateComponent {
  msg$: Observable<string>;
  constructor(private store: Store<TranslateState>) {
    this.msg$ = this.store.select('message');
  }
  itMessage() {
    this.store.dispatch({ type: 'IT' });
  }
  bgMessage() {
    this.store.dispatch({ type: 'BG' });
  }
  enMessage() {
    this.store.dispatch({ type: 'EN' });
  }
}
