import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn && loggedIn === 'true') {
      this.loggedIn.next(true);
    }
  }

  public get isLoggedIn() {
    return this.loggedIn;
  }

  login() {
    this.loggedIn.next(true);
    localStorage.setItem('loggedIn', 'true');
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('loggedIn');
  }
}
