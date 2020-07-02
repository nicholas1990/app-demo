import { Component } from '@angular/core';
import { TargheStoreService } from '../../services/targhe.localstore.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  providers: [
    TargheStoreService
  ]
})
export class TabsPage {

  badgeContent: number;

  constructor(private readonly targheStore: TargheStoreService) { }

  ionViewWillEnter() {
    // popolo il counter
    this.badgeContent = this.targheStore.getTotTarghe();

    // popolo l'ultimo movimento
  }

}
