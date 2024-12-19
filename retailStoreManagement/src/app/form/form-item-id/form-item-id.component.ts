import { Component, inject, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { itemAdded, productAgenda } from '../form.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-item-id',
  templateUrl: './form-item-id.component.html',
  styleUrls: ['./form-item-id.component.css']
})
export class FormItemIdComponent implements OnInit {
  // injections
  readonly formDataService = inject(FormDataService)

  //properties
  private formAvailData!: productAgenda[]

  //methods
  ngOnInit(): void {
    this.formAvailData = this.formDataService.productAvailableData
  }


  get availItem() {
    return this.formAvailData
  }

  onAddItem(formAddItem:NgForm){
    // const addItem:itemAdded = {
    //   itemId:formAddItem.form.value
    // }
    console.log(formAddItem.form);
    
  }

}
