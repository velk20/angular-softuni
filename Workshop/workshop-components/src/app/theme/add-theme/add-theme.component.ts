import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css'],
})
export class AddThemeComponent {
  constructor(private apiService: ApiService) {}

  addTheme(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
  }
}
