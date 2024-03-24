import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css'],
})
export class AddThemeComponent {
  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {}

  addTheme(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { themeName, postText } = form.value;
    this.apiService.createTheme(themeName, postText).subscribe((theme) => {
      this.router.navigate(['/themes']);
    });
  }
}
