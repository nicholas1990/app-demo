import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  providers: [
    StoreService
  ]
})
export class TabsPage {

  badgeContent: number;

  constructor(private store: StoreService) {
    // this.badgeContent = 10;
  }

  ionViewWillEnter() {
    // popolo il counter
    this.badgeContent = this.store.getTotTarghe();

    // popolo l'ultimo movimento
  }

}
