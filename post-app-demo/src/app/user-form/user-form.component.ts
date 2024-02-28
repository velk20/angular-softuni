import {Component, OnInit} from '@angular/core';
import {RegisterUser} from "../model/register";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user/user.service";
import {logMessages} from "@angular-devkit/build-angular/src/tools/esbuild/utils";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  // @ts-ignore
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      username: ['', Validators.required],
      phone: ['', Validators.required],
      age: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm !== undefined && this.userForm.valid) {
      const user: RegisterUser = this.userForm.value;
      console.log(user);
      this.userService
        .registerUser(user)
        .subscribe(token => {
          console.log(token.token);
        },
        error => console.log(error.error),
        () => console.log('user is register!'))
    } else {
      console.error('Form is invalid');
    }
  }
}
