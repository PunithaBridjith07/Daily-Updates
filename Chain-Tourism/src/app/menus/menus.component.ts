import { Component, EventEmitter, Input, Output } from '@angular/core';
import { tourList } from '../tourList.model';

@Component({
  selector: 'chainTour-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent {
  @Input() toursMenu: tourList[] = [];

  @Output() selectTour = new EventEmitter<string>();

  /*
  modifySelectedTour(event: MouseEvent, tourName: string) {
    console.log(tourName);

    event.preventDefault();
    let selectTour: string = tourName;
    this.selectTour.emit(selectTour);

  } */
}
