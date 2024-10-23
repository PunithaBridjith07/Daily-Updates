import { Component, Input } from '@angular/core';
import { tourList } from '../tourList';

@Component({
  selector: 'chainTour-tour-selected',
  templateUrl: './tour-selected.component.html',
  styleUrls: ['./tour-selected.component.css']
})
export class TourSelectedComponent {
  @Input() tour:tourList[] = []
}
