import { Component } from '@angular/core';

export class Actor {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public success: boolean
  ) {}
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  bondActors: Actor[];

  constructor() {
    this.bondActors = [
      new Actor(1, 'Sean', 'Connery', true),
      new Actor(2, 'David', 'Niven', true),
      new Actor(3, 'George', 'Lazenby', true),
      new Actor(4, 'Roger', 'Moore', false),
      new Actor(5, 'Timothy', 'Dalton', true),
      new Actor(6, 'Pierce', 'Brosnan', false),
      new Actor(7, 'Daniel', 'Craig', true)
    ];
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
