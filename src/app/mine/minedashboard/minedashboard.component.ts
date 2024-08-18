import { Component } from '@angular/core';
import { AppDataService } from '../../app-data.service';
import { SharedDataService } from '../../shared-data.service';
import { MineService } from '../mine.service';
import { PlayerService } from '../../player/player.service';
import { LoadingService } from '../../loading.service';
import { BuiServiceService } from '../../bui-service.service';

@Component({
  selector: 'app-minedashboard',
  templateUrl: './minedashboard.component.html',
  styleUrls: ['./minedashboard.component.css', "../../../assets/style/card.css"]
})
export class MinedashboardComponent {
  public error: string = "";

  constructor(public appData: AppDataService, public sharedData: SharedDataService, public mineService: MineService, 
    public playerService: PlayerService, private loading: LoadingService, private buiService: BuiServiceService
  ) {}

  public buyNewMine() {
    this.loading.startLoading();
    this.mineService.buyNewMine().subscribe(
      response => {
        this.loading.endLoading();
        window.location.reload();
      },
      error => {
        this.loading.endLoading();
        this.error = this.buiService.extractErrorMessage(error);
      }
    )
  }
}
