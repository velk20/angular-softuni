import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [LoaderComponent, WelcomeMsgComponent],
  imports: [CommonModule, RouterLink],
  exports: [LoaderComponent, WelcomeMsgComponent],
})
export class SharedModule {}
