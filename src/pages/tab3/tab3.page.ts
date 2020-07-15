import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TargheService } from '../../services/targhe.service';
import { MovimentiTarghe } from '../../enums/targhe.enum';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  // providers: [
  //   TargheService
  // ]
})
export class Tab3Page implements OnInit, OnDestroy {

  counter: number;
  lastMove: number;
  labelLastMove: string;

  // counter$: Observable<number>;
  subscription: Subscription;

  constructor(public targheService: TargheService) { }

  ngOnInit() {
    // this.counter$ = this.targheService.totaleTarghe$;
  }

  ionViewWillEnter() {

    let ultimoMovimento = this.targheService.getUltimoMovimento();

    this.subscription = this.targheService.totaleTarghe$.subscribe(
      () => {
        ultimoMovimento = this.targheService.getUltimoMovimento();
        this.lastMove = ultimoMovimento;
        this.labelLastMove = ultimoMovimento > 0 ? `+${ultimoMovimento}` : `${ultimoMovimento}`;
      }
    );

  }

  /**
   * Al click su acquista:
   *  - totale targhe += 10;
   *  - ultimo movimento = 10.
   */
  handleClickAcquista() {
    this.targheService.setTarghe(MovimentiTarghe.ADD_10);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
