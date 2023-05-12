import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccommodationModule } from './modules/accommodation/accommodation.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccommodationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
