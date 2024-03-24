import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ProfileDetails } from '../../types/user';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidatorDirective } from '../../shared/validators/email-validator.directive';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  showEditMode: boolean = false;
  profileDetails: ProfileDetails = {} as ProfileDetails;
  profileForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        EmailValidatorDirective.emailValidate(['bg', 'com']),
      ],
    ],
    username: ['', [Validators.required, Validators.minLength(5)]],
    tel: [''],
  });

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    const { username, tel, email } = this.userService.user!;
    this.profileDetails = {
      email,
      tel,
      username,
    };

    this.profileForm.setValue({
      email,
      tel,
      username,
    });
  }

  onEditToggle() {
    this.showEditMode = !this.showEditMode;
  }

  save() {
    if (this.profileForm.invalid) {
      return;
    }

    this.profileDetails = this.profileForm.value as ProfileDetails;
    const { username, email, tel } = this.profileDetails;
    this.userService.updateProfile(username, email, tel).subscribe(() => {
      this.onEditToggle();
    });
  }
}
