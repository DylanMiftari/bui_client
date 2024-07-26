import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public isLoading: boolean = false;

  public startLoading() {
    this.isLoading = true;
  }

  public endLoading() {
    this.isLoading = false;
  }
}
