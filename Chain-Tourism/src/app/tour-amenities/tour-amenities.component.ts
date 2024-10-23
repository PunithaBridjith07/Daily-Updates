import { Component, Input } from '@angular/core';
import { tourList } from '../tourList';

@Component({
  selector: 'chainTour-tour-amenities',
  templateUrl: './tour-amenities.component.html',
  styleUrls: ['./tour-amenities.component.css']
})
export class TourAmenitiesComponent {
  @Input() tour:tourList[] = [];
}
