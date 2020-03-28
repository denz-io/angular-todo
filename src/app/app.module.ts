import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Globals } from './globals';

import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    NavigationComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})

export class AppModule { }
