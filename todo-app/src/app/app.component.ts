import { Component } from '@angular/core';
import {Todo} from "./type/Todo";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoItems: Todo[] = [];

  onItemAdd(todo:Todo){
    this.todoItems.push(todo);
  }

  onItemDelete(value:string){
    debugger;
    this.todoItems = this.todoItems.filter(e => e.value !== value);
  }

}

