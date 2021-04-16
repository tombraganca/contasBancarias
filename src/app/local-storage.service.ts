import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;
  
  constructor() {
    this.storage = window.localStorage;
  }

  setConta(key: string, value: any){
    if(this.storage){
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  getConta(key: string): any {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(key));
    }
    return null;
  }

  removeConta(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  clearConta(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }
  
}
