import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigimonesComponent } from './digimones/digimones.component';
import { DigimonesServices } from './digimones/digimones.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DigimonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DigimonesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
