import { inject, Injectable } from '@angular/core';
import { itemAdded, productAgenda } from './form.model';
import { LoginDataService } from '../login/login-data.service';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  //subscriptions and injectable
  readonly productDataService = inject(AppService);
  readonly loginDataService = inject(LoginDataService);

  //properties
  private productsAvailable: productAgenda[] = []
  private itemAdded: itemAdded[] = [
    {
      userId: 1,
      itemId: 5002,
      price: 75,
      quantity: 3,
      discount: 0
    }, {
      userId: 2,
      itemId: 5004,
      price: 96,
      quantity: 3,
      discount: 20
    }
  ]
  private itemSession: number[] = []
  // private loggedUser!: number;

  //methods
  constructor() {
    this.productsAvailable = this.productDataService.Products
  }
  get productAvailableData() {
    return this.productsAvailable
  }
  get addedItem() {
    const loggedUser = this.loginDataService.getUsers.find((user) => user.status === 'in');
    let itemAdded: itemAdded[]
    if (loggedUser) {
      itemAdded = this.itemAdded.filter((item) => item.userId === loggedUser.userId)
      return itemAdded;
    }
    return []
  }
  private handleNotAddedItem(addItem: itemAdded) {
    if (addItem.discount === 0) {
      let currentPrice: number = Number(addItem.price) * Number(addItem.quantity);
      let itemAdded = {
        userId: 1,
        itemId: addItem.itemId,
        price: currentPrice,
        quantity: addItem.quantity,
        discount: addItem.discount
      }
      this.itemAdded.push(itemAdded);
    } else if (addItem.discount !== 0) {
      let currentQuantity: number = addItem.quantity
      let currentPrice: number = Number(addItem.price) * Number(currentQuantity);
      let totalPrice: number = currentPrice - ((currentPrice / 100) * addItem.discount);
      let itemAdded = {
        userId: 1,
        itemId: addItem.itemId,
        price: totalPrice,
        quantity: currentQuantity,
        discount: addItem.discount
      }
      this.itemAdded.push(itemAdded);
    }
    console.log("New data Added: ", this.itemAdded);

  }
  private handleAddedItem(addItem: itemAdded) {
    this.itemAdded = this.itemAdded.map((item) => {
      if (item.itemId === addItem.itemId) {
        let currentQuantity = item.quantity + addItem.quantity
        let currentPrice = Number(addItem.price) * Number(currentQuantity);
        let totalPrice = currentPrice - ((currentPrice / 100) * addItem.discount);
        return {
          ...item,
          price: totalPrice,
          quantity: currentQuantity
        }
      }
      return item
    })
    console.log("Updated Data: ", this.itemAdded);
  }

  onAddItem(addItem: itemAdded) {
    console.log(this.itemSession.includes(addItem.itemId));

    if (this.itemSession.includes(addItem.itemId)) {
      this.handleAddedItem(addItem)
    } else {
      this.itemSession.push(addItem.itemId)
      this.handleNotAddedItem(addItem)
    }
  }

  onDeleteAddedItem(itemId: number) {
    this.itemAdded = this.itemAdded.filter((item) => item.itemId !== itemId);
    console.log("From Service AddedItem: ", this.itemAdded);
  }
}