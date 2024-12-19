import { Injectable } from '@angular/core';
import { itemAdded, productAgenda } from './form.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
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

  private itemAdded: itemAdded[] = []

  get productAvailableData() {
    return this.productAvailable
  }

  get addedItem() {
    return this.itemAdded;
  }

  onAddItem(addItem: itemAdded) {
    console.log("Service:", addItem);

    this.itemAdded.push(addItem);
  }

  onDeleteAddedItem(itemId: number) {
    let item: itemAdded[] = this.itemAdded.filter((item) => item.itemId !== itemId);
    this.itemAdded = item

  }
}