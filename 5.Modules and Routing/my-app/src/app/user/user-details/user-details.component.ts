import {Component, OnInit} from '@angular/core';
import {User} from "../../types/user";
import {UserService} from "../user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  user: User = {} as User;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(v => {
      const id = v['id'];

      // console.log('From resolver data', this.activatedRoute.snapshot.data['user']);

      this.userService.getSingleUser(id).subscribe((user) => {
        console.log(user);
        this.user = user;
      })
    })
  }
}
