import { Injectable } from '@angular/core';
import { AppDataService } from '../app-data.service';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private appData: AppDataService) { }

  verify() {
    if(this.appData.playerData === undefined) {
      return true;
    }
    return !this.appData.playerData.player.inTravel;
  }
}
