import { Component, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MainDataServiceService } from '../main-data-service.service';

@Component({
  selector: 'chainTour-tour-selected',
  templateUrl: './tour-selected.component.html',
  styleUrls: ['./tour-selected.component.css'],
})
export class TourSelectedComponent {
  //  subscription and injection
  readonly mainDataService = inject(MainDataServiceService)

  //Property of TourSelectedComponent
  readonly tourSelected$ = new BehaviorSubject<string>('').asObservable();

  //  get and set methods
  set tourSelected(){}
}
