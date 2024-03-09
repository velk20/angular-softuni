import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];
  isLoading: boolean = true;

  constructor(private api: ApiService,
              private userService: UserService) {

  }

  get userId(): string {
    return this.userService.user?.id || '';
  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  ngOnInit(): void {
    this.api.getThemes().subscribe({
      next: (themes) => {
        console.log(themes);
        this.themes = themes;
        this.isLoading = false;
      },
      error: (err) => {
        console.log('Error: ' + err);
      },
    });
  }

  isSubscribed(theme: Theme) {
    return theme.subscribers.find(s => s === this.userId);
  }
}
