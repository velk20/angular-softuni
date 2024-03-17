import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {ProfileDetails, UserForAuth} from "../../types/user";
import {EmailValidator, FormBuilder, Validators} from "@angular/forms";
import {EmailValidatorDirective} from "../../shared/validators/email-validator.directive";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showEditMode: boolean = false;
  profileDetails: ProfileDetails = {} as ProfileDetails;
  constructor(private userService: UserService,
              private  fb:FormBuilder) {
  }

  profileForm = this.fb.group({
    email: ['', [Validators.required, EmailValidatorDirective.emailValidate(['bg', 'com'])]],
    username: ['',[Validators.required,Validators.minLength(5)]],
    tel: [''],

  })
  ngOnInit(): void {
    this.profileDetails = {
      email: 'dsa@gmai.com',
      tel:'0878285643',
      username: 'dasdas'
    }
  }

  onEdit() {
    this.showEditMode = !this.showEditMode;
  }


  save() {
    if (this.profileForm.invalid) {
      return;
    }

    this.profileDetails = this.profileForm.value as ProfileDetails;

    this.onEdit()
  }
}
