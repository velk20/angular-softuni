import {Component, OnDestroy, OnInit} from '@angular/core';
import { PostService } from './service/post/post-service.service';
import {UserService} from "./service/user/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'post-app-demo';

  constructor(private postService: PostService,
              private userService: UserService) {}

  ngOnDestroy(): void {
    localStorage.removeItem('access_token');
    }
  ngOnInit(): void {
    this.userService
      .getJwtTokenFromServer({username:'admin', password:'admin'})
      .subscribe((token) => {
        const newToken = token.token
        console.log(token);
        localStorage.setItem('access_token', JSON.stringify(newToken));

      });
  }
}
