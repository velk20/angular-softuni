import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list/user-list.component';
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    UserListComponent
  ],
  exports: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: 'user/list', component: UserListComponent}])
  ]
})
export class UserModule {
}
