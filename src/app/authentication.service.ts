import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loginMessage: string = '';

  constructor() { }


  public login(): boolean {
    this.loginMessage = 'Login successful';
    return true;
  }
  public register(): boolean {
    return true;
  }
}
