import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-list-item',
  standalone: true,
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  @Input() userItem!:{
    firstName:string,
    lastName:string,
    showLastName: boolean
  }

  @Input() staticString!: string;

  @Output() customEvent = new EventEmitter()

  constructor() {
  }

  selectClickHandler() {
    this.customEvent.emit({test: 123})
  }
}
