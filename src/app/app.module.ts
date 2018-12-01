import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormilaireComponent } from './formilaire/formilaire.component';
@NgModule({
  declarations: [
    AppComponent,
    SidbarComponent,
    FormilaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
