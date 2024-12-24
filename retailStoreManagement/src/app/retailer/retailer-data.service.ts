import { Injectable } from '@angular/core';
import { retailer } from './retailer.model';

@Injectable({
  providedIn: 'root'
})
export class RetailerDataService {
  readonly retailers: retailer[] = [
    {
      retailerId: 'r1',
      retailCompany: 'vishalMall',
      retailPh_no_: 9876437621,
      status: 'out',
      terminated: false
    }
  ]

  constructor() { }
}
