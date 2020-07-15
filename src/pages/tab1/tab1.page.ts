import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TargheService } from 'src/services/targhe.service';
import { MovimentiTarghe } from '../../enums/targhe.enum';
import { take } from 'rxjs/operators';

export interface Impianto {
  firstGroup: {
    codice: string,
    tipologia: string,
    address: {
      latitude: string,
      longitude: string
    },
    destinazione: string,
    combustibile: string,
    categoria: string,
    volumetria: string,
    responsabile: string,
    photo: boolean,
    note: string,
  };
  secondGroup: {
    costruttore: string,
    tiraggio: string,
    destGeneratore: string,
    prot: string,
    modello: string,
    tipo: string,
    fascia: string,
    matricola: string,
    scarico: string,
  };
  thirdGroup: {
    esito: boolean,
  }
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnDestroy {

  hideBtn: boolean;  // hide btn scrollToBottom e scrollToTop.

  impianti: Impianto[];

  subscription: Subscription;

  constructor(protected readonly targheService: TargheService) {
    // this.subscription = this.targheService.getTotTarghe$().subscribe((tot: number) => {
    // });
  }

  ionViewWillEnter() {
    if (window.localStorage.getItem('impianti') !== null) {
      this.impianti = [...JSON.parse(window.localStorage.getItem('impianti'))];
      this.hideBtn = false;
    } else {
      this.impianti = [];
      this.hideBtn = true;
    }

    this.subscription = this.targheService.totaleTarghe$.subscribe(() => {
      take(1);
    });
  }

  trackById(index: number, data: any): number {
    return data.id;
  }

  scrollToBottom() {
    this.getContent().scrollToBottom(500);
  }

  scrollToTop() {
    this.getContent().scrollToTop(500);
  }

  private getContent() {
    return document.querySelector('ion-content');
  }

  minusOne() {
    this.targheService.setTarghe(MovimentiTarghe.MINUS_1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
