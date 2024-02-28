import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostService } from './post-service.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MyInterceptor} from "./jwt/jwt-interceptor";

@NgModule({
  declarations: [AppComponent, PostListComponent, PostItemComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    PostService,
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
