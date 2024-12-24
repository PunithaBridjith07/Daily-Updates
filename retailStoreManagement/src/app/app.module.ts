import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { BillComponent } from './bill/bill.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiscountPipe } from './bill/discount.pipe';
import { PricePipe } from './bill/price.pipe';
import { LoginComponent } from './login/login.component';
import { RetailerComponent } from './retailer/retailer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    BillComponent,
    HomeComponent,
    LoginComponent,
    RetailerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DiscountPipe,
    PricePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
