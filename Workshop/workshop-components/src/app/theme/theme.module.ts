import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeRoutingModule } from './theme-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { MainComponent } from './main/main.component';
import { PostItemComponent } from './posts-list/post-item/post-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddThemeComponent,
    CurrentThemeComponent,
    ThemesListComponent,
    MainComponent,
    PostsListComponent,
    PostItemComponent,
  ],
  exports: [ThemesListComponent],
  imports: [CommonModule, SharedModule, FormsModule, ThemeRoutingModule],
})
export class ThemeModule {}
