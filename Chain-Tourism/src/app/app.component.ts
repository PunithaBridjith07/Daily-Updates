import { Component, SimpleChanges } from '@angular/core';
import { tourList } from './tourList.model';
import { AppdataService } from './appdata.service';

@Component({
  selector: 'chainTour-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Chain-Tourism';

  TourList: tourList[] = [];
  selectedTours: tourList[] = [];
  selectedTour: string = '';

  constructor(private appTourListData: AppdataService) {
    this.TourList = appTourListData.tourListData;
  }
  
  handleSelectTour(tourName: string) {
    this.TourList.forEach((tour) =>
      tour.tourType == tourName ? tour.selected === true : tour.selected
    );
  }
  handleDeSelectTour(selectedTour: string) {
    this.TourList.forEach((tour) =>
      tour.tourType == selectedTour ? tour.selected === false : tour.selected
    );
  }
  updateSelectedTours(): void {
    this.selectedTours = this.TourList.slice().filter((tour) => tour.selected);
    this.selectedTour = this.selectedTours
      .map((tour) => tour.tourType)
      .join('');
  }
  handleSelectingTour(tourName: string) {
    this.handleDeSelectTour(this.selectedTour);
    this.handleSelectTour(tourName);
    console.log(this.TourList);
    this.updateSelectedTours();
  }
}
