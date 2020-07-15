import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TargheService } from '../../services/targhe.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  // providers: [
  //   TargheService
  // ]
})
export class TabsPage implements OnInit {

  badgeContent: number = null;
  totaleTarghe$: Observable<number | null>;

  constructor(
    protected targheService: TargheService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.totaleTarghe$ = this.targheService.totaleTarghe$;
  }

  ionViewWillEnter() { }

}
