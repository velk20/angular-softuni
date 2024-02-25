import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

type User = {
  name: string;
  age: number;
  status?: string;
};

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  @Input('color') colorValue = 'white';
  @Output() onTestOutput = new EventEmitter<string>();
  ngOnInit(): void {
    console.log('INIT');
  }
  ngAfterViewInit(): void {
    console.log('After View Init');
  }
  ngOnDestroy(): void {
    console.log('DESTROY');
  }
  isToggle = false;
  imgUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaKR4dJx2klVs3a_hQcBZZIdv09WbBkAXtn4FlKuJ_obFtkAYgclFJxNaDdZpy_Sms_vo&usqp=CAU';
  users: User[] = [
    {
      name: 'Pesho',
      age: 14,
    },
    {
      name: 'Pesho1',
      age: 15,
    },
    {
      name: 'Pesho2',
      age: 16,
    },
    {
      name: 'Pesho3',
      age: 19,
    },
  ];

  handleClick() {
    console.log('clicked!');
    this.isToggle = !this.isToggle;
  }

  handleInput(value: string) {
    console.log(value);

    this.onTestOutput.emit(value || '');
  }
}
