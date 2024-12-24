import { Injectable } from '@angular/core';
import { productAgenda } from './form/form.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private productAvailable: productAgenda[] = [
    {
      itemId: 5001,
      price: 20,
      discount: 0
    },
    {
      itemId: 5002,
      price: 25,
      discount: 0
    },
    {
      itemId: 5003,
      price: 30,
      discount: 0
    },
    {
      itemId: 5004,
      price: 40,
      discount: 20
    },
    {
      itemId: 5005,
      price: 50,
      discount: 20
    },
  ]

  //properties
  get Products() {
    return this.productAvailable;
  }
}
