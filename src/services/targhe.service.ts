import { Injectable } from '@angular/core';
import { MovimentiTarghe } from '../enums/targhe.enum';
// import { Storage } from '@ionic/storage';

/**
 * Possibili movimenti sulle targhe.
 */
// declare enum MovimentiTarghe {
//   ADD_1,
//   ADD_12,
//   MINUS_1,
// }

@Injectable()
export class TargheService {

  private _getItem(key: string): string {
    return window.localStorage.getItem(key);
  }

  private _setItem(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  constructor() { }

  getTotTarghe() {
    const targhe = this._getItem('totTarghe');
    return JSON.parse(targhe);
  }
  /**
   * Calcola e salva nel localstorage il totale delle taghe.
   *
   * @param movimento: MovimentiTarghe enum.
   */
  setTotTarghe(movimento: MovimentiTarghe): void {
    const totTarghe = JSON.stringify(this.calculateTotTarghe(movimento));
    this._setItem('totTarghe', totTarghe);
  }

  private calculateTotTarghe(movimento: MovimentiTarghe): number {
    debugger;
    let totTargheCorrente: number = this.getTotTarghe();

    switch (movimento) {
      case MovimentiTarghe.ADD_1:
        ++totTargheCorrente;
        break;
      case MovimentiTarghe.ADD_12:
        totTargheCorrente += 12;
        break;
      case MovimentiTarghe.MINUS_1:
        --totTargheCorrente;
        break;
    }

    debugger;

    return totTargheCorrente;
  }

  getUltimoMovimento() {
    const ultimoMovimento = this._getItem('ultimoMovimento');
    return JSON.parse(ultimoMovimento);
  }
  setUltimoMovimento(val: number) {
    const ultimoMovimento = JSON.stringify(val);
    this._setItem('ultimoMovimento', ultimoMovimento);
  }

  calculateUltimoMovimento(movimento: MovimentiTarghe) {
    // let totTargheCorrente: number = this.getTotTarghe();
    let ultimoMovimento: number;

    switch (movimento) {
      case MovimentiTarghe.ADD_1:
        ultimoMovimento = 1;
        break;
      case MovimentiTarghe.ADD_12:
        ultimoMovimento = 12;
        break;
      case MovimentiTarghe.MINUS_1:
        ultimoMovimento = -1;
        break;
    }

    debugger;

    return ultimoMovimento;
  }

}
