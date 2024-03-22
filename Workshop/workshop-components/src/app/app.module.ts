import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ThemeModule } from './theme/theme.module';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ErrorComponent, AuthenticateComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    ThemeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, // after other modules cause of the .forChild routing
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
