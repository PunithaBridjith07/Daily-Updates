import { Component, inject } from '@angular/core';
import { AppdataService } from 'src/app/appdata.service';
import { TourBanner } from 'src/app/tourList.model';

@Component({
  selector: 'chainTour-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  readonly appSlideBannerData = inject(AppdataService);

  bannerData: TourBanner[] = this.appSlideBannerData.bannerData;
  activeSlide: number = 0;
  numOfBanner: number = this.appSlideBannerData.bannerData.length;
  get tourType() {
    return this.bannerData[this.activeSlide].bannerName;
  }
  get bannerImage() {
    return this.bannerData[this.activeSlide].bannerImage;
  }
  get banner() {
    return this.bannerData[this.activeSlide].card;
  }
  get status():boolean {
    return this.bannerData[this.activeSlide].status;
  }
  set setStatus(activeSlide: number) {
    this.bannerData[activeSlide].status = !this.bannerData[activeSlide].status;
  }
  handlePreviousButton(e: Event) {
    e.preventDefault();

    if (this.activeSlide > 0) {
      this.setStatus = this.activeSlide;
      console.log(this.activeSlide, this.status);
      this.activeSlide--;
      this.setStatus = this.activeSlide;
      console.log(this.activeSlide, this.status);
    }
  }
  handleNextButton(e: Event) {
    e.preventDefault();
    if (this.activeSlide < this.numOfBanner - 1) {
      this.setStatus = this.activeSlide;
      console.log(this.activeSlide, this.status);
      this.activeSlide++;
      this.setStatus = this.activeSlide;
      console.log(this.activeSlide, this.status);
    }
  }
}

/* interface TourCard {
  imageUrl: string;
  cardName: string;
  cardHeading: string;
  cardDescription: string;
}

interface TourBanner {
  bannerImage: string;
  bannerName: string;
  bannerCardOne: TourCard;
  bannerCardTwo: TourCard;
  bannerCardThree: TourCard;
  status: 'active' | 'inactive';
} */
