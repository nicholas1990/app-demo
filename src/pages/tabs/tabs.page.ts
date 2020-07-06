import { Component } from '@angular/core';
import { TargheService } from '../../services/targhe.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  providers: [
    TargheService
  ]
})
export class TabsPage {

  badgeContent: number;

  constructor(private readonly targheService: TargheService) { }

  ionViewWillEnter() {
    // popolo il counter
    this.badgeContent = this.targheService.getTotTarghe();

    // popolo l'ultimo movimento
  }

}
