import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { LogInComponent } from './log-in_sign-up/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
