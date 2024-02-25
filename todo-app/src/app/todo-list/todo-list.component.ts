import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../type/Todo";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input('todoItems') todoItems: Todo[] = [];
  @Output() onDelete = new EventEmitter<string>();
  onDeleteHandler(value:string){
    debugger;
    this.onDelete.emit(value);
  }
}
