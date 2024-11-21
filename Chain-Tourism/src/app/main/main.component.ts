import { Component, inject, Input, OnInit } from '@angular/core';
import { TourBanner, tourList } from '../tourList.model';
import { AppdataService } from '../appdata.service';

@Component({
  selector: 'chainTour-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  ngOnInit(): void {
    // this.filterBannerData();

    throw new Error('Method not implemented.');
  }
  /* private filterBannerData(): void {
    this.bannerData = this.appTourListDefaultData.tourListData
      .filter((tour) => tour.banner.length !== 0)
      .flatMap((tour) => [...tour.banner]);
    console.log('bannerData has been updated:', this.bannerData);
  } */
}
