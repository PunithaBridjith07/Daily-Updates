import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { tourList } from '../tourList.model';
import { AppdataService } from '../appdata.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'chainTour-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css'],
})
export class MenusComponent {
  readonly appService = inject(AppdataService);
  // private TourList$ = new BehaviorSubject<tourList[]>([]);
  selectedTours: tourList[] = [];
  selectedTour: string = '';

  private TourList$: Observable<tourList[]> =
    this.appService.tourList.asObservable();
  /* constructor() {
    this.TourList$.next(this.appService.tourList.getValue());
    if (this.TourList$) {
      console.log('tourlist$ recieved :', this.TourList$);
    }
  } */

  get tourlist() {
    return this.TourList$;
  }

  /*
  modifySelectedTour(event: MouseEvent, tourName: string) {
    console.log(tourName);

    event.preventDefault();
    let selectTour: string = tourName;
    this.selectTour.emit(selectTour);

  } */
}
