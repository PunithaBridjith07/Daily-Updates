import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenSharedComponent } from './authen-shared.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { LoginFormComponent } from '../login-form/login-form.component';

@NgModule({
  declarations: [AuthenSharedComponent, RegisterFormComponent,LoginFormComponent],
  exports: [AuthenSharedComponent, RegisterFormComponent,LoginFormComponent],
  imports: [CommonModule],
})
export class AuthenSharedModule {}
