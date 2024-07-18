import { Component } from '@angular/core';
import { AppDataService } from '../../app-data.service';
import { SharedDataService } from '../../shared-data.service';
import { MineService } from '../mine.service';
import { PlayerService } from '../../player/player.service';

@Component({
  selector: 'app-minedashboard',
  templateUrl: './minedashboard.component.html',
  styleUrls: ['./minedashboard.component.css', "../../../assets/style/card.css"]
})
export class MinedashboardComponent {
  constructor(public appData: AppDataService, public sharedData: SharedDataService, public mineService: MineService, 
    public playerService: PlayerService
  ) {}

  public buyNewMine() {
    this.mineService.buyNewMine();
  }
}
