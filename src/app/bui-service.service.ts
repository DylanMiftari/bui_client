import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuiServiceService {

  constructor() { }

  public extractErrorMessage(httpResponse :HttpErrorResponse) {
    return httpResponse.error.message;
  }
}
