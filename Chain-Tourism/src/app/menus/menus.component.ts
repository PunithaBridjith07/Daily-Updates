import { Component } from '@angular/core';

@Component({
  selector: 'chainTour-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent {

  tripList = [
    {
      tripType :"Leisure Travel",
      img : "/Chain-Tourism/src/assets/Trip-images/leisure Travel/leisure3.jpg"
    },
    {
      tripType : "Business Travel",
      img:"/Chain-Tourism/src/assets/Trip-images/Business Travel/business3"
    },
    {
      tripType : "Adventure Travel",
      img : "/Chain-Tourism/src/assets/Trip-images/Adventure Travel/adventure3"
    },
    {
      tripType : "Ecotourism Travel",
      img : "/Chain-Tourism/src/assets/Trip-images/Ecotourism Travel/eco3"
    },
    {
      tripType : "Cruise Travel",
      img : "/Chain-Tourism/src/assets/Trip-images/Cruise Travel/cruise3"
    },
    {
      tripType : "Road Trips",
      img : "/Chain-Tourism/src/assets/Trip-images/Road Trips/road3"
    },
    {
      tripType : "Luxury Travel",
      img : "/Chain-Tourism/src/assets/Trip-images/Luxury Travel/luxury3"
    },
    {
      tripType : "Sustainable Travel",
      img : "/Chain-Tourism/src/assets/Trip-images/Sustainable Travel/sustainable3"
    }
  ]

}
