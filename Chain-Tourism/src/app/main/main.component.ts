import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { tourList } from '../tourList';

@Component({
  selector: 'chainTour-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnChanges {
  @Input() toursList: tourList[] = []


  ngOnChanges(changes: SimpleChanges): void {
  }

  /* ngOnInit(): void {
    throw new Error('Method not implemented.');
  } */
}
