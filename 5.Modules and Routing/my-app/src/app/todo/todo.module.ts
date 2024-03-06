import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoLsitComponent} from './todo-lsit/todo-lsit.component';


@NgModule({
  declarations: [
    TodoLsitComponent
  ],
  exports: [
    TodoLsitComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodoModule {
}
