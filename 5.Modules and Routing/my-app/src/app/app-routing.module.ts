import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoLsitComponent} from "./todo/todo-lsit/todo-lsit.component";
import {ErrorPageComponent} from "./shared/error-page/error-page.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserDetailsComponent} from "./user/user-details/user-details.component";
import {UserResolve} from "./user/user-details/user-details.resolver";
import {AuthGuard} from "./user/user-details/user-detail.guard";

const routes: Routes = [
  // {path: '', pathMatch: 'full', component: TodoLsitComponent},
  {path: '', pathMatch: 'full', redirectTo: 'todo-list'},
  {path: 'todo-list', component: TodoLsitComponent},
  {path: 'user/list', component: UserListComponent},
  {path: 'user/list/:id', component: UserDetailsComponent, resolve: {user: UserResolve}, canActivate: [AuthGuard]},
  {path: 'error-page', component: ErrorPageComponent},
  {path: '**', redirectTo: 'error-page'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
