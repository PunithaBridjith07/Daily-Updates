import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'chainTour-tour-selected',
  templateUrl: './tour-selected.component.html',
  styleUrls: ['./tour-selected.component.css'],
})
export class TourSelectedComponent {
  readonly tourSelected$ = new BehaviorSubject<string>('').asObservable();

}
