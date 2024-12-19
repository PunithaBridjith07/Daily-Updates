import { Component, inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormDataService } from './form-data.service';
import { itemAdded, productAgenda } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  // injections
  readonly formDataService = inject(FormDataService)

  //properties
  private formAvailData!: productAgenda[]
  private itemAdded!: itemAdded[]
  itemId!: number;
  quantity!: number;
  price: number = 0;

  //methods
  constructor() {
    this.formAvailData = this.formDataService.productAvailableData
    if (this.formAvailData) {
      console.log("formAvailData Received: ", this.formAvailData);
    }
    this.itemAdded = this.formDataService.addedItem
  }

  get availItem() {
    return this.formAvailData
  }
  get addedItem() {
    return this.itemAdded
  }
  set itemPrice(itemId: number) {
    let filterData;
    filterData = this.formAvailData.find((item) => item.itemId === itemId)
    this.price = Number(filterData?.price)
  }

  onAddItem(itemId: number, quantity: number, discount: number = 20) {
    this.itemPrice = Number(itemId);
    let totalPrice: number;
    let currentPrice: number = Number(this.price) * Number(quantity);
    let addItem: itemAdded;

    if (itemId === 5004 || itemId === 5005) {
      totalPrice = currentPrice - ((currentPrice / 100) * discount);
      addItem = {
        itemId: Number(this.itemId),
        price: totalPrice,
        quantity: this.quantity,
        discount: discount
      }
    } else {
      addItem = {
        itemId: Number(this.itemId),
        price: currentPrice,
        quantity: this.quantity,
        discount: discount
      }
    }

    this.itemId = 0
    this.quantity = 0
    this.price = 0
    this.formDataService.onAddItem(addItem);
  }
  onSubmit(form: NgForm) {
    console.log("Form Submitted💖");

  }

}
