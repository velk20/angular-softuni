import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ListItemComponent} from "../list-item/list-item.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ListItemComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
    users= [
      {
        firstName:'Ivan',
        lastName: 'Ivanov',
        showLastName: true,

      },
      {
        firstName: "Petar",
        lastName: "Petrov",
        showLastName: true,

      }
    ];

    constructor() {
    }

  handleClickEvent(event:MouseEvent){
    this.users.map((e) => e.showLastName = !e.showLastName);
  }

  customEventHandler() {
    console.log()
  }
}
