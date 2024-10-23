import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourSelectedComponent } from './tour-selected/tour-selected.component';
import { MenusComponent } from './menus/menus.component';
import { MainComponent } from './main/main.component';
import { SliderComponent } from './slider/slider.component';
import { TourBookComponent } from './tour-book/tour-book.component';
import { TourAmenitiesComponent } from './tour-amenities/tour-amenities.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SliderComponent },
  { path: 'selectedTour', component: TourSelectedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/* export const routingComponents = [
  MenusComponent,
  MainComponent,
  SliderComponent,
  TourSelectedComponent,
  TourBookComponent,
  TourAmenitiesComponent]; */