import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [
    StoreService
  ]
})
export class Tab3Page {

  counter: number;
  lastMove: number;
  labelLastMove: string;

  constructor(private store: StoreService) { }

  ionViewWillEnter() {
    this._initialize();
  }

  handleClickAcquista() {
    const totTarghe = this.store.getTotTarghe();
    this.store.setTotTarghe(totTarghe + 10);
    this.store.setLastMovement(10);

    this._initialize();
  }

  private _initialize() {
    // popolo il counter
    this.counter = this.store.getTotTarghe();

    // popolo l'ultimo movimento
    const lastMove = this.store.getLastMovement();

    this.lastMove = lastMove;
    this.labelLastMove = lastMove > 0 ? `+${lastMove}` : `${lastMove}`;
  }

}
