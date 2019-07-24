import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HolloWorldComponent } from './hollo-world/hollo-world.component';
import { DateComponent } from './date/date.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TestComponent } from './test/test.component';
import { QAFormComponent } from './qa-form/qa-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HolloWorldComponent,
    DateComponent,
    ContactFormComponent,
    TestComponent,
    QAFormComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
