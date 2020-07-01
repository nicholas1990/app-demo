import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StoreService {

  /**
   * é demo, non leggo dal localstorage, ma dal precedente set
   */

  getTotTarghe() {
    return JSON.parse(window.localStorage.getItem('totTarghe'));
  }
  setTotTarghe(val: number) {
    const totTarghe = JSON.stringify(val);
    window.localStorage.setItem('totTarghe', totTarghe);
  }

  getLastMovement() {
    return JSON.parse(window.localStorage.getItem('ultimoMovimento'));
  }
  setLastMovement(val: number) {
    const ultimoMovimento = JSON.stringify(val);
    window.localStorage.setItem('ultimoMovimento', ultimoMovimento);
  }

  constructor() { }

}
