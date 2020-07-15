import { Injectable } from '@angular/core';
import { LocalStorageService } from './common/localstorage.service';
import { LocalStorageKeys } from './common/keys.enum';
import { MovimentiTarghe } from '../enums/targhe.enum';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TargheService {

  private _totaleTarghe: BehaviorSubject<number | null> = new BehaviorSubject(null);
  public totaleTarghe$: Observable<number | null> = this._totaleTarghe.asObservable();

  constructor(private readonly localStorageService: LocalStorageService) { }

  getTotTarghe(): number {
    const targheStored: string = this.localStorageService.getItem(LocalStorageKeys.totTarghe);
    const targhe: number = JSON.parse(targheStored);
    // this._totaleTarghe.next(targhe)
    return targhe;
  }
  private setTotTarghe(totTargheCorrente: number): void {
    const totTarghe: string = JSON.stringify(totTargheCorrente);
    this.localStorageService.setItem(LocalStorageKeys.totTarghe, totTarghe);

    // dopo aver fatto il set nel local storage, devo aggiornare l'observable
    // fatto dopo il set

    // this.totaleTarghe$.subscribe((tot: number) => {
    //   console.log('dio service', tot);
    // });

  }

  getUltimoMovimento(): number {
    const ultimoMovimento: string = this.localStorageService.getItem(LocalStorageKeys.ultimoMovimento);
    return JSON.parse(ultimoMovimento);
  }
  private setUltimoMovimento(nuovoMovimento: number): void {
    const movimento: string = JSON.stringify(nuovoMovimento);
    this.localStorageService.setItem(LocalStorageKeys.ultimoMovimento, movimento);
  }

  /**
   * Calcola e salva i dati riguardanti le targhe.
   *
   * @param movimento: configurazioni definite nel enum MovimentiTarghe.
   * @param reset: boolean, se true il conteggio targhe parte da zero altrimenti recupera il totale stored.
   */
  setTarghe(movimento: MovimentiTarghe, reset?: boolean): void {

    const { totTargheCorrente, nuovoMovimento } = this.calcoliTarghe(movimento, reset);

    this.setTotTarghe(totTargheCorrente);
    this.setUltimoMovimento(nuovoMovimento);

    this._totaleTarghe.next(totTargheCorrente);

  }

  /**
   * Calcola il totale delle taghe e l'ultimo movimento effettuato.
   */
  private calcoliTarghe(movimento: MovimentiTarghe, reset: boolean = false) {

    let totTargheCorrente: number = !reset ? this.getTotTarghe() : 0;
    let nuovoMovimento: number;

    switch (movimento) {
      case MovimentiTarghe.ADD_10:
        totTargheCorrente += 10;
        nuovoMovimento = 10;
        break;
      case MovimentiTarghe.ADD_12:
        totTargheCorrente += 12;
        nuovoMovimento = 12;
        break;
      case MovimentiTarghe.MINUS_1:
        totTargheCorrente -= 1;
        nuovoMovimento = -1;
        break;
    }

    return { totTargheCorrente, nuovoMovimento };
  }

}
