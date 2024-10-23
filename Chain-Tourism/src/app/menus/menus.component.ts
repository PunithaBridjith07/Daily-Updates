import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { tourList } from '../tourList';

@Component({
  selector: 'chainTour-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit, OnChanges {
  @Input() toursList: tourList[] = [];

  @Output() selectTour = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnInit(): void {
  }

  modifySelectedTour(event: MouseEvent, tourName: string) {
    console.log(tourName);

    event.preventDefault();
    let selectTour: string = tourName;
    this.selectTour.emit(selectTour);

  }
}
