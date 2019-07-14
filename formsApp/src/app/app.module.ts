import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HolloWorldComponent } from './hollo-world/hollo-world.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    HolloWorldComponent,
    DateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
