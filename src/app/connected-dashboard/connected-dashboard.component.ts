import { Component } from '@angular/core';
import { PlayerService } from '../player/player.service';
import { Player } from '../player/player.model';

@Component({
  selector: 'app-connected-dashboard',
  templateUrl: './connected-dashboard.component.html',
  styleUrl: './connected-dashboard.component.css'
})
export class ConnectedDashboardComponent {
  public player: Player | undefined;

  constructor(private playerService: PlayerService) {
    this.playerService.getUser().subscribe(
      response => {
        this.player = response;
      }
    );
  }
}
