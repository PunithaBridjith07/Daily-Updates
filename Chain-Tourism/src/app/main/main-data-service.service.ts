import { inject, Injectable, OnDestroy, OnInit } from '@angular/core';
import { AppdataService } from '../appdata.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { stayAvailable } from './main.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainDataServiceService implements OnDestroy {
  //  subscriptions and injected
  readonly httpClient = inject(HttpClient);
  private subscription = new Subscription;

  //  Properties of MainDataServiceService
  readonly stayAvailable$ = new BehaviorSubject<stayAvailable[]>([])
  private staySelected$ = new BehaviorSubject<string>('');

  //  get methods
  get staySelected() {
    return this.staySelected$.getValue();
  }

  //  
  onSelectStayType(selectedStayType: string) {
    this.staySelected$.next(selectedStayType);
    this.fetchStayData(`http://localhost:3000/chain/${this.staySelected$.getValue().replace(" ", "")}`, "Error on fetching available Stay.")

  }

  private fetchStayData(URL: string, ERROR: string) {
    const subscription = this.httpClient.get<{ data: stayAvailable[] }>(URL).subscribe({
      next: (res) => {
        this.stayAvailable$.next(res.data);
        console.log("stayAvailable : ", this.stayAvailable$);
      },
      error: (err) => { throw new Error(ERROR) },
      complete: () => {
        if (this.stayAvailable$ && this.staySelected$) {
          console.log("staySelected: " + this.staySelected$.getValue() + "\nstayAvailable :" + this.stayAvailable$.getValue());

        }
      }
    })
    this.subscription.add(subscription);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
