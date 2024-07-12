import { Injectable } from '@angular/core';
import { PlayerService } from './player/player.service';
import { AppData } from './app-data.model';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  public playerData: AppData | undefined;

  constructor(private playerService: PlayerService) {
    playerService.getUser().subscribe(
      response => {
        this.playerData = response;
      }
    )
  }

  public reloadData() {
    this.playerService.getUser().subscribe(
      response => {
        this.playerData = response;
      }
    )
  }
}
