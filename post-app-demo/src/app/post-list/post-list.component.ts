import { Component, OnInit } from '@angular/core';
import { Post } from '../types/post';
import { PostService } from '../service/post/post-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [{ body: 'dsada', title: 'dsa', id: 1, userId: 2 }];

  constructor(private _postService: PostService) {}
  ngOnInit(): void {
    this._postService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }
}
