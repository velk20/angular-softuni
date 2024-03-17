import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { RouterLink } from '@angular/router';
import { EmailValidatorDirective } from './validators/email-validator.directive';

@NgModule({
  declarations: [LoaderComponent, WelcomeMsgComponent, EmailValidatorDirective],
  imports: [CommonModule, RouterLink],
  exports: [LoaderComponent, WelcomeMsgComponent, EmailValidatorDirective],
})
export class SharedModule {}
