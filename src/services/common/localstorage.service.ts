import { Injectable } from '@angular/core';
import { LocalStorageKeys } from './keys.enum';

@Injectable()
export class LocalStorageService {

  constructor() { }

  getItem(key: LocalStorageKeys): string {
    return window.localStorage.getItem(key);
  }

  setItem(key: LocalStorageKeys, value: string): void {
    window.localStorage.setItem(key, value);
  }

}
