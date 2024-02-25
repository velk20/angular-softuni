import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-item-action',
  templateUrl: './item-action.component.html',
  styleUrls: ['./item-action.component.css']
})
export class ItemActionComponent {
  @Input("itemId") itemValue: string = '';
  @Output() onItemDelete = new EventEmitter<string>();
  onItemDeleteHandler(value:string){
    debugger;
    this.onItemDelete.emit(value);

  }

}
