import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input('todoValue') todoValue: string = '';
  @Output() onDelete = new EventEmitter<string>();

  onDeleteHandler(value:string){
    debugger;
    this.onDelete.emit(value);
  }
}
