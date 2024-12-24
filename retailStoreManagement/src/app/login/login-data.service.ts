import { Injectable } from '@angular/core';
import { admin, user } from '../form/form.model';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  //properties
  private users: user[] = [
    {
      userId: 1,
      email: 'user1@gmail.com',
      password: 'firstUser',
      status: 'out'
    },
    {
      userId: 2,
      email: 'user2@gmail.com',
      password: 'secondUser',
      status: 'out'
    }
  ]
  readonly admin: admin[] = []
  private loggedUser!: user;
  private userEmailLogged!: string;

  //methods
  get getUsers() {
    return this.users
  }
  get userLogged() {
    return this.loggedUser
  }
  get emailLogged() {
    return this.userEmailLogged
  }

  getUserStatus(userId: number) {
    const user = this.users.find(
      (user) => user.userId === userId && user.status === 'in'
    );
    if (user) {
      this.loggedUser = user
      // this.userEmailLogged = user?.email
    }
    return user !== undefined;
  }
  set setUserStatus(userId: number) {
    this.users = this.users.map((user) => user.userId === userId ? { ...user, status: 'in' } : user)
  }
}
