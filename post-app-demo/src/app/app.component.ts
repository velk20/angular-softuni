import {Component, OnDestroy, OnInit} from '@angular/core';
import { PostService } from './post-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'post-app-demo';

  constructor(private postService: PostService) {}

  ngOnDestroy(): void {
    localStorage.removeItem('access_token');
    }
  ngOnInit(): void {
    this.postService
      .getJwtTokenFromServer('admin', 'admin')
      .subscribe((token) => {
        const newToken = token.token
        console.log(token);
        localStorage.setItem('access_token', JSON.stringify(newToken));

      });
  }
}
