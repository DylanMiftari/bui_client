import { Component } from '@angular/core';
import { PlayerService } from '../player/player.service';
import { Player } from '../player/player.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ["./dashboard.component.css", "../../assets/style/card.css"]
})
export class DashboardComponent {

  public player: Player | undefined;

  constructor(private playerService: PlayerService) {
    this.playerService.getUser().subscribe(
      response => {
        this.player = response;
        console.log(response);
      }
    );
  }
  
}
