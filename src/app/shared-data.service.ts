import { Injectable } from '@angular/core';
import { PlayerService } from './player/player.service';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() {}

  public baseUrl = 'http://127.0.0.1:8000/';
  public maxCompaniesPerPlayer = 3;
}
