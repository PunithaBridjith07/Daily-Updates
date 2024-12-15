import { Component, inject } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { AppdataService } from 'src/app/appdata.service';
import { TourBanner } from 'src/app/tourList.model';

@Component({
  selector: 'chainTour-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  readonly appService = inject(AppdataService);

  // Reactive state for the active slide
  private activeSlide$ = new BehaviorSubject<number>(0);

  // Banner data observable from the service
  bannerData$: Observable<TourBanner[]> =
    this.appService.bannersData.asObservable();

  // Derived observables for the current banner's properties
  bannerName$ = combineLatest([this.bannerData$, this.activeSlide$]).pipe(
    map(
      ([banners, activeSlide]) =>
        banners[activeSlide]?.bannerName || 'Loading...'
    )
  );

  bannerImage$ = combineLatest([this.bannerData$, this.activeSlide$]).pipe(
    map(([banners, activeSlide]) => banners[activeSlide]?.bannerImage || '')
  );

  card$ = combineLatest([this.bannerData$, this.activeSlide$]).pipe(
    map(([banners, activeSlide]) => banners[activeSlide]?.card || [])
  );

  // Navigation methods
  handlePreviousButton(e: Event) {
    e.preventDefault();
    const currentSlide = this.activeSlide$.getValue();
    if (currentSlide > 0) {
      this.activeSlide$.next(currentSlide - 1);
    }
  }

  handleNextButton(e: Event) {
    e.preventDefault();
    this.bannerData$.subscribe((banners: TourBanner[]) => {
      const currentSlide = this.activeSlide$.getValue();
      if (currentSlide < banners.length - 1) {
        this.activeSlide$.next(currentSlide + 1);
      }
    });
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
