import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidatorDirective } from '../../shared/validators/email-validator.directive';
import { matchPasswordsValidator } from '../../shared/validators/match-passwords';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: [
      '',
      [
        Validators.required,
        EmailValidatorDirective.emailValidate(['bg', 'com']),
      ],
    ],
    tel: [''],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(4)]],
        rePassword: ['', [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator('password', 'rePassword')],
      },
    ),
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }
    const {
      username,
      email,
      tel,
      passGroup: { password, rePassword } = {},
    } = this.form.value;
    this.userService
      .register(username!, tel!, email!, password!, rePassword!)
      .subscribe(() => {
        this.router.navigate(['/themes']);
      });
  }
}
