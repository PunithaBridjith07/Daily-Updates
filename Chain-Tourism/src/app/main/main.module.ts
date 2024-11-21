import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SliderComponent } from './slider/slider.component';
import { TourSelectedModule } from './tour-selected/tour-selected.module';
import { LoaderComponent } from '../loader/loader.component';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [MainComponent, SliderComponent],
  exports: [MainComponent],
  imports: [CommonModule, TourSelectedModule,LoaderModule],
})
export class MainModule {}
