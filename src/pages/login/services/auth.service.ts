import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  private checkToken() {
    this.storage.get(TOKEN_KEY).then((res: string) => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }

  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.storage.set(TOKEN_KEY, 'Bearer Token 1234567').then(() => {
          this.authenticationState.next(true);
        });
        resolve({status: 'success'}); // È andato tutto perfettamente!
      }, 500);
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.storage.remove(TOKEN_KEY).then(() => {
          this.authenticationState.next(false);
        });
        resolve({status: 'success'}); // È andato tutto perfettamente!
      }, 500);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
