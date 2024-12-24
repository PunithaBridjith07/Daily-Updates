import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormDataService } from '../form/form-data.service';
import { itemAdded } from '../form/form.model';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class BillComponent implements OnInit {
  readonly formDataService = inject(FormDataService);

  private itemAdded!: itemAdded[];
  private totalPrice: number = 0
  ngOnInit(): void {
    this.itemAdded = this.formDataService.addedItem
    this.calculateTotalPrice()
  }
  get orderList() {
    return this.itemAdded
  }
  get amountToPay() {
    return this.totalPrice
  }
  calculateTotalPrice() {
    this.totalPrice = this.itemAdded.reduce((price, item) => price + item.price, 0);
    console.log("Total Price: ", this.totalPrice);
  }
}
