import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Component2Component } from './component2/component2.component';
import { ServiceService } from './service.service';
import { Component1Component } from './component1/component1.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,Component2Component,Component1Component ],
  bootstrap:    [ AppComponent ],
  providers: [ServiceService]
})
export class AppModule { }
