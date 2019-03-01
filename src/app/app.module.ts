import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { CookComponent } from './cook/cook.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    CookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
