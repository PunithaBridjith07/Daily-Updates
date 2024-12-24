import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { LoginDataService } from './login-data.service';
import { user } from '../form/form.model';
import { Router } from '@angular/router';

function isEmailValid(storedEmail: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const userEmail = control.value;
    if (userEmail === storedEmail) {
      return { emailIdValid: false };
    }
    return null
  };
}
function isPasswordValid(storedPassword: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const userPassword = control.value;
    if (userPassword === storedPassword) {
      return { passwordValid: false };
    }
    return null
  };
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  //subscriptions & injections
  readonly loginDataService = inject(LoginDataService)
  readonly router = inject(Router)
  readonly users: user[] = this.loginDataService.getUsers
  private storedUser: user = this.loginDataService.userLogged

  //properties
  form = new FormGroup({
    email: new FormControl('', { validators: [Validators.email, Validators.required, isEmailValid(this.storedUser?.email)] }),
    password: new FormControl('', { validators: [Validators.maxLength(this.storedUser?.password.length), Validators.required, isPasswordValid(this.storedUser?.password)] })
  })

  //methods
  onSubmit() {
    if (this.form.valid) {
      const foundUser = this.users.find(
        (user) =>
          user.email === this.form.get('email')?.value &&
          user.password === this.form.get('password')?.value
      );
      if (foundUser) {
        this.loginDataService.setUserStatus = foundUser.userId;
        if (this.loginDataService.getUserStatus(foundUser.userId)) {
          this.router.navigate(['addOrder'])
        }
        console.log('Login successful:', foundUser);
      }
    }

    console.log('Form state:', this.form);
  }
}
