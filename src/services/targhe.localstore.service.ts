import { Injectable } from '@angular/core';
// import { Storage } from '@ionic/storage';

@Injectable()
export class TargheStoreService {

  private _getItem(key: string): string {
    return window.localStorage.getItem(key);
  }

  private _setItem(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

  constructor() { }

  getTotTarghe() {
    const targhe = this._getItem('totTarghe');
    return JSON.parse(targhe);
  }
  setTotTarghe(val: number) {
    const totTarghe = JSON.stringify(val);
    this._setItem('totTarghe', totTarghe);
  }

  getUltimoMovimento() {
    const ultimoMovimento = this._getItem('ultimoMovimento');
    return JSON.parse(ultimoMovimento);
  }
  setUltimoMovimento(val: number) {
    const ultimoMovimento = JSON.stringify(val);
    this._setItem('ultimoMovimento', ultimoMovimento);
  }

}
