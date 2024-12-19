import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { BillComponent } from './bill/bill.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FormItemIdComponent } from './form/form-item-id/form-item-id.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    BillComponent,
    HomeComponent,
    FormItemIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
