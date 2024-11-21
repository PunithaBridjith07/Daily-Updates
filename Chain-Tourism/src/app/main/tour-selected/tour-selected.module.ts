import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourSelectedComponent } from './tour-selected.component';
import { TourBookComponent } from './tour-book/tour-book.component';
import { TourAmenitiesComponent } from './tour-amenities/tour-amenities.component';

@NgModule({
  declarations: [
    TourSelectedComponent,
    TourBookComponent,
    TourAmenitiesComponent,
  ],
  exports: [TourSelectedComponent],
  imports: [CommonModule],
})
export class TourSelectedModule {}
