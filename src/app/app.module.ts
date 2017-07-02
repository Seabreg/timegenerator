import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import {ColorPickerModule} from 'angular4-color-picker';


import { AppComponent } from './app.component';
import { CoverComponent } from './cover.component';
import { ConfigComponent } from './config.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
