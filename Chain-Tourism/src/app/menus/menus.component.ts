import { Component } from '@angular/core';
import { tourType } from '../tourType';

@Component({
  selector: 'chainTour-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent {

  Tours:tourType[] = []

  ngOnInit(){
    this.Tours = [
      {
        tourType :"Leisure Travel",
        image : "../../assets/Leisure Travel/leisure3.jpg"
      },
      {
        tourType : "Business Travel",
        image:"../../assets/Business Travel/business3.jpg"
      },
      {
        tourType : "Adventure Travel",
        image : "../../assets/Adventure Travel/adventure3.jpg"
      },
      {
        tourType : "Ecotourism Travel",
        image : "../../assets/Ecotourism/eco3.jpg"
      },
      {
        tourType : "Cruise Travel",
        image : "../../assets/Cruise Travel/cruise3.jpg"
      },
      {
        tourType : "Road Trips",
        image : "../../assets/Road Trips/road3.jpg"
      },
      {
        tourType : "Luxury Travel",
        image : "../../assets/Luxury Travel/luxury3.jpg"
      },
      {
        tourType : "Sustainable Travel",
        image : "../../assets/Sustainable Travel/sustainable3.jpg"
      }
    ]
  }

}
