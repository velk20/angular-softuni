import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './theme/main/main.component';
import { ThemesListComponent } from './theme/themes-list/themes-list.component';
import { PostsListComponent } from './theme/posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostItemComponent } from './theme/posts-list/post-item/post-item.component';
import { HomeComponent } from './home/home.component';
import {ThemeModule} from "./theme/theme.module";
import {UserModule} from "./user/user.module";
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    ThemeModule,
    HttpClientModule,
    UserModule,

    AppRoutingModule, // after other modules cause of the .forChild routing
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
