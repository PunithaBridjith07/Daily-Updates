import { Component, inject } from '@angular/core';
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
  private itemAdded: itemAdded[] = []
  itemId!: number;
  quantity!: number;
  ErrorMessage: string = ''

  constructor() {
    this.formAvailData = this.formDataService.productAvailableData
    if (this.formAvailData) {
      console.log("formAvailData Received: ", this.formAvailData);
    }
    setInterval(() =>
      this.itemAdded = this.formDataService.addedItem, 1500)
  }

  //methods
  get availItem() {
    return this.formAvailData
  }
  get addedItem() {
    return this.itemAdded
  }
  onAddItem(form: NgForm) {
    let addItem: itemAdded;
    if (this.quantity <= 0 || this.quantity === undefined) {
      this.ErrorMessage = "at-least one item must added"
      return
    }
    const foundItem = this.formAvailData.find((item) => item.itemId === Number(this.itemId));

    if (foundItem) {
      addItem = {
        userId: 2,
        itemId: Number(this.itemId),
        price: foundItem.price,
        quantity: this.quantity,
        discount: foundItem.discount
      }

      this.formDataService.onAddItem(addItem);
      form.controls['itemId'].reset()
      form.controls['quantity'].reset()
      this.ErrorMessage = ''
    } else {
      console.log("not foundItem");

    }
  }
  onDeleteItem(itemId: number) {
    this.formDataService.onDeleteAddedItem(itemId);
  }
  onSubmit(form: NgForm) {
    console.log("Form Submitted💖");

  }

}
