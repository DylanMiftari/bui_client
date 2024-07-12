import { Component } from '@angular/core';
import { PlayerService } from '../player/player.service';
import { Player } from '../player/player.model';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-connected-dashboard',
  templateUrl: './connected-dashboard.component.html',
  styleUrl: './connected-dashboard.component.css'
})
export class ConnectedDashboardComponent {

  constructor(public appData: AppDataService) {
  }
}
