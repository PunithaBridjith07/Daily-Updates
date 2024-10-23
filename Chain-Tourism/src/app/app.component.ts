import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { tourList } from './tourList';

@Component({
  selector: 'chainTour-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'Chain-Tourism';

  TourList: tourList[] = []
  selectedTours: tourList[] = []
  selectedTour:string = '';

  ngOnInit(): void {
    this.TourList = [
      {
        tourType: "Leisure Travel",
        image: "../../assets/Leisure Travel/leisure3.jpg",
        selected: false
      },
      {
        tourType: "Business Travel",
        image: "../../assets/Business Travel/business3.jpg",
        selected: false
      },
      {
        tourType: "Adventure Travel",
        image: "../../assets/Adventure Travel/adventure3.jpg",
        selected: false
      },
      {
        tourType: "Ecotourism Travel",
        image: "../../assets/Ecotourism/eco3.jpg",
        selected: false
      },
      {
        tourType: "Cruise Travel",
        image: "../../assets/Cruise Travel/cruise3.jpg",
        selected: false
      },
      {
        tourType: "Road Trips",
        image: "../../assets/Road Trips/road3.jpg",
        selected: false
      },
      {
        tourType: "Luxury Travel",
        image: "../../assets/Luxury Travel/luxury3.jpg",
        selected: false
      },
      {
        tourType: "Sustainable Travel",
        image: "../../assets/Sustainable Travel/sustainable3.jpg",
        selected: false
      }
    ]
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['TourList']) {
      console.log('changes : ', changes['selectedTour'].currentValue);

    }
  }
  handleSelectTour(tourName:string){
    this.TourList.map((tour) => tour.tourType == tourName ? tour.selected = true : tour.selected)
  }
  handleDeSelectTour(selectedTour:string){
    this.TourList.map((tour) => tour.tourType == selectedTour ? tour.selected = false : tour.selected)
  }
  updateSelectedTours(): void {
    this.selectedTours = this.TourList.slice().filter(tour => tour.selected);
    this.selectedTour = this.selectedTours.map((tour)=>tour.tourType).join('');
  }
  handleSelectingTour(tourName: string) {
    this.handleDeSelectTour( this.selectedTour);
    this.handleSelectTour(tourName);
    console.log(this.TourList);
    this.updateSelectedTours()
  }
}
