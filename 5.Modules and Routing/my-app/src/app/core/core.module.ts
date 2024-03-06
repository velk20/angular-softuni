import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalLoaderComponent} from './global-loader/global-loader.component';
import {SharedModule} from "../shared/shared.module";
import {NavComponent} from './nav/nav.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    GlobalLoaderComponent,
    NavComponent
  ],
  exports: [
    GlobalLoaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink
  ]
})
export class CoreModule {
}
