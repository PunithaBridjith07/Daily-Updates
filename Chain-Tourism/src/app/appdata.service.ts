import { inject, Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { type TourBanner, type tourList } from './tourList.model';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppdataService implements OnDestroy {
  private httpClient = inject(HttpClient);
  private subscription = new Subscription();

  private TourList$ = new BehaviorSubject<tourList[]>([]);
  private bannerDataSubject$ = new BehaviorSubject<TourBanner[]>([]);
  private selectedTourType = new BehaviorSubject<string>('');

  constructor() {
    this.fetchAppData(
      'http://localhost:3000/chain',
      'Failed to fetch defaultAppData'
    );
  }
  private filterBannerData(): void {
    const tourList = this.TourList$.getValue();
    const banners = tourList
      .filter((tour: tourList) => tour.banner.length !== 0)
      .flatMap((tour: tourList) => [...tour.banner]);
    this.bannerDataSubject$.next(banners);
    console.log('bannerData has been updated:', this.bannerDataSubject$);
  }

  get tourList() {
    return this.TourList$;
  }

  get bannersData() {
    return this.bannerDataSubject$;
  }

  fetchAppData(URL: string, ERROR: string) {
    const subscription = this.httpClient
      .get<{ data: tourList[] }>(URL)
      .subscribe({
        next: (res) => {
          if (Array.isArray(res.data)) {
            this.TourList$.next(res.data);
            this.filterBannerData();
          } else {
            console.error('Invalid data format from backend:', res.data);
          }
        },
        error: (err) => {
          throw new Error(ERROR);
        },
        complete: () => {
          if (this.TourList$) {
            console.log('Data Recieved', this.TourList$.getValue());
          }
        },
      });
    this.subscription.add(subscription);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
