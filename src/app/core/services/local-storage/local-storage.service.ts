import { Injectable } from '@angular/core';
import { StorageKey } from '../../enum/storage-key.enum';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  set(key: string, value: string): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  clear(): void {
    const values = Object.values(StorageKey);

    if (values.length <= 0) {
      return;
    }

    values.forEach((value) => this.remove(value));
  }

  remove(key: string): any {
    return localStorage.removeItem(key);
  }
}
