import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  public baseUrl = 'http://127.0.0.1:8000/';
}
