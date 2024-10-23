import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenusComponent } from './menus/menus.component';
import { MainComponent } from './main/main.component';
import { SliderComponent } from './slider/slider.component';
import { TourBookComponent } from './tour-book/tour-book.component';
import { TourAmenitiesComponent } from './tour-amenities/tour-amenities.component';
import { TourSelectedComponent } from './tour-selected/tour-selected.component';



@NgModule({
  declarations: [
    AppComponent,
    MenusComponent,
    MainComponent,
    SliderComponent,
    TourSelectedComponent,
    TourBookComponent,
    TourAmenitiesComponent
    // routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
