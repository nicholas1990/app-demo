import { Component } from '@angular/core';
import { TargheStoreService } from '../../services/targhe.localstore.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [
    TargheStoreService
  ]
})
export class Tab3Page {

  counter: number;
  lastMove: number;
  labelLastMove: string;

  constructor(private readonly targheStore: TargheStoreService) { }

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
    const ultimoTotTarghe = this.targheStore.getTotTarghe();
    const totaleTarghe = ultimoTotTarghe + 10;

    this.targheStore.setTotTarghe(totaleTarghe);
    this.targheStore.setUltimoMovimento(10);

    this._getAllTarghe();
  }

  private _setAllTarghe

  private _getAllTarghe() {
    const lastMovement = this.targheStore.getUltimoMovimento();

    this.counter = this.targheStore.getTotTarghe();
    this.lastMove = lastMovement;
    this.labelLastMove = lastMovement > 0 ? `+${lastMovement}` : `${lastMovement}`;
  }

}
