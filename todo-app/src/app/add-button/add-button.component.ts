import {Component, EventEmitter, Output} from '@angular/core';
import {Todo} from "../type/Todo";

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent {
  @Output() onAddTodo = new EventEmitter<Todo>();
addItem(item:HTMLInputElement){
  let data: Todo = {value: item.value};
  this.onAddTodo.emit(data);

  item.value = '';
}
}
