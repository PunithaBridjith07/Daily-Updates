import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { BillComponent } from './bill/bill.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'makeOrder', component: FormComponent },
  { path: 'bill', component: BillComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
