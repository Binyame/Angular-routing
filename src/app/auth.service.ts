import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: string, password: string) {
    if (user === 'User' && password === 'password') {
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }
  logout(): any {
    localStorage.removeItem('username');
  }
  getUser(): any {
    return localStorage.getItem('username');
  }
  isLoggedIn(): boolean {
      return this.getUser() !== null; //return true if user is logged in
    }
}
export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
]
