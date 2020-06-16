import { Component, OnInit } from '@angular/core';

export interface Impianto {
  firstGroup: {
    codice: string,
    tipologia: string,
    responsabile: string,
    address: {
      latitude: string,
      longitude: string
    },
    photo: boolean
  };
  secondGroup: {
    ctrl1: string,
    ctrl2: string,
    radio1: string
  };
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  impianti: Impianto[];

  constructor() { }

  ionViewWillEnter() {
    this.impianti = [...JSON.parse(window.localStorage.getItem('impianti'))];
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

}
