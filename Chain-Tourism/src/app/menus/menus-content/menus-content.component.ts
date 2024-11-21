import { Component, Input } from '@angular/core';
import { tourList } from 'src/app/tourList.model';

@Component({
  selector: 'chainTour-menus-content',
  templateUrl: './menus-content.component.html',
  styleUrls: ['./menus-content.component.css'],
})
export class MenusContentComponent {
  @Input() menuContent!: tourList[];
}
