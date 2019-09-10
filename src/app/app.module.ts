import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { Time12Pipe } from './shared/pipes/time12.pipe';
import { RestaurantComponent } from './common/restaurant/restaurant.component';
import { ConsumptionCenterComponent } from './common/consumption-center/consumption-center.component';
import { ConsumptionCenterListComponent } from './common/consumption-center-list/consumption-center-list.component';


registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Time12Pipe,
    RestaurantComponent,
    ConsumptionCenterComponent,
    ConsumptionCenterListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
