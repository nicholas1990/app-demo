import { Component } from '@angular/core';
import { TargheService } from '../../services/targhe.service';
import { Observable } from 'rxjs';

/**
 * Possibili movimenti sulle targhe.
 */
declare enum MovimentiTarghe {
  ADD_1,
  ADD_12,
  MINUS_1
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [
    TargheService
  ]
})
export class Tab3Page {

  counter: number;
  lastMove: number;
  labelLastMove: string;

  counter$: Observable<any>;

  constructor(private readonly targheStore: TargheService) { }

  ionViewWillEnter() {
    this._getAllTarghe();
  }

  /**
   * Al click su acquista, per una costante C = 10:
   *  - recupero l'ammontare totale delle targhe;
   *  - setto il nuovo totale, che è uguale al totale targhe + C;
   *  - setto l'ultimo movimento, che è uguale a C.
   *
   * Recupero i valori dal localStorage e li salvo in variabili locali
   */
  handleClickAcquista() {
    // const ultimoTotTarghe = this.targheStore.getTotTarghe();
    // const totaleTarghe = ultimoTotTarghe + 10;

    // const totaleTarghe = this.targheStore.se(MovimentiTarghe.ADD_12);
    // const ultimoMovimento = this.targheStore.calculateUltimoMovimento(MovimentiTarghe.ADD_12);

    // this.targheStore.setTotTarghe(totaleTarghe);
    // this.targheStore.setUltimoMovimento(ultimoMovimento);

    this.targheStore.setTotTarghe(MovimentiTarghe.ADD_12);

    this._getAllTarghe();
  }

  private _getAllTarghe() {
    const totTarghe = this.targheStore.getTotTarghe();
    const ultimoMovimento = this.targheStore.getUltimoMovimento();

    this.counter = totTarghe;
    this.lastMove = ultimoMovimento;
    this.labelLastMove = ultimoMovimento > 0 ? `+${ultimoMovimento}` : `${ultimoMovimento}`;
  }

}
