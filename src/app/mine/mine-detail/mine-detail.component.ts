import { Component } from '@angular/core';
import { Mine } from '../mine.model';
import { MineService } from '../mine.service';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../player/player.service';
import { SharedDataService } from '../../shared-data.service';
import { LoadingService } from '../../loading.service';

@Component({
  selector: 'app-mine-detail',
  templateUrl: './mine-detail.component.html',
  styleUrls: ["../../../assets/style/card.css", './mine-detail.component.css']
})
export class MineDetailComponent {
  public id: string | null;
  public mine: Mine | undefined;
  public error: string = "";
  public priceForNextLevel: number | undefined;

  public collectError: string = "";

  constructor(private mineService: MineService, private route: ActivatedRoute, public playerService: PlayerService, 
    public sharedData: SharedDataService, private loading: LoadingService
  ) {
    this.loading.startLoading();
    this.id = this.route.snapshot.paramMap.get("id");
    if(this.id === null) {
      this.error = "Aucun identifiant de mine renseigné";
      this.loading.endLoading();
    } else {
      this.mineService.getMineData(this.id).subscribe(
        respone => {
          this.mine = respone;
          this.priceForNextLevel = this.sharedData.sharedData?.minelevel[this.mine!.level-1].priceForNextLevel;
          loading.endLoading();
        },
        error => {
          if(error.status == 403) {
            this.error = "La mine possédant l'identifiant n°"+this.id+" ne vous appartient pas";
          } else if(error.status == 404) {
            this.error = "Aucune mine ne possède l'identifiant n°"+this.id
          }
        },
      );
    }
  }

  public upgradeMine() {
    this.loading.startLoading();
    this.mineService.upgradeMine(this.id!).subscribe(
      response => {
        window.location.reload();
      }
    );
  }

  public collectMine() {
    this.loading.startLoading();
    this.mineService.collectMine(this.id!).subscribe(
      response => {
        window.location.reload();
      },
      error => {
        this.collectError = error.message;
      }
    )
  }

  public startMine(resourceId: string) {
    this.loading.startLoading();
    this.mineService.startMine(this.id!, resourceId).subscribe(
      response => {
        window.location.reload();
      }
    )
  }
}
