import { Injectable } from '@angular/core';

@Injectable()
export class LocalStoreService {

  constructor() { }

  getItem(key: string): string {
    return window.localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

}
