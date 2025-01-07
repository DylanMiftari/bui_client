import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnectedDashboardComponent } from '../../../connected-dashboard/connected-dashboard.component';
import { CasinoClient } from '../../casino-client.model';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../loading.service';
import { CasinoService } from '../../casino.service';
import { BuiServiceService } from '../../../bui-service.service';
import { EnvService } from '../../../env.service';
import { DiceResult } from '../../diceResult.model';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ["../../../../assets/style/form.css", './dice.component.css']
})
export class DiceComponent implements OnInit {
  @ViewChild(ConnectedDashboardComponent) connectedDashboard!: ConnectedDashboardComponent;
  public casinoId: string|null = null;
  public error: string = "";
  public playError: string = "";
  public casinoClient: CasinoClient|undefined;

  public dice1: number = 1;
  public dice2: number = 1;
  public dice1Interval: any = null;
  public dice2Interval: any = null;

  public bet: number = 0;

  public gameResult: DiceResult|undefined;

  protected resultMessage: string = "";
  protected resultMessageColor: string = "#6b0000";
  protected buttonText: string = "Lancer les dés";
  protected gameStep: string = "start";

  constructor(private route: ActivatedRoute, private loading: LoadingService, private casinoService: CasinoService, 
      private buiService: BuiServiceService, private env: EnvService
    ) {
      loading.startLoading();
  
      this.casinoId = this.route.snapshot.paramMap.get("casinoId");
      if(this.casinoId === null) {
        this.casinoId = "Aucun id de casino renseigné"
      }

      this.dice1 = this.getRandomNumber();
      this.dice2 = this.getRandomNumber();
  }


    protected getRandomNumber(): number {
      return Math.round(1 + Math.random() * 5)
    }

    ngOnInit(): void {
      if(this.casinoId !== null) {
        this.casinoService.getCasinoClientFromCasinoId(+this.casinoId!).subscribe(
          response => {
            this.casinoClient = response;
            if(this.casinoClient!.ticket === null) {
              this.error = "Vous n'avez pas de ticket pour ce casino";
            }
            if(this.casinoClient!.casino.level < this.env.casino_level_for_dice) {
              this.error = "Ce casino ne possède pas le jeu des dés"
            }
  
            this.bet = this.getMaxBet() / 2;
            this.loading.endLoading();
          },
          error => {
            this.error = this.buiService.extractErrorMessage(error);
          }
        )
      }
    }

    protected getMaxBet(): number {
      if(this.casinoClient?.ticket.isVIP) {
        return this.casinoClient.casino.diceVIPMaxBet;
      }
      return this.casinoClient!.casino.diceMaxBet;
    }

    protected getDiceGoal(): number {
      if(this.casinoClient?.ticket.isVIP) {
        return this.casinoClient.casino.diceVIPGoal;
      }
      return this.casinoClient!.casino.diceGoal;
    }

    protected getDiceWinMultiplicator(): number {
      if(this.casinoClient?.ticket.isVIP) {
        return this.casinoClient.casino.diceVIPWinMultiplicator;
      }
      return this.casinoClient!.casino.diceWinMultiplicator;
    }

    protected increaseBet(): void {
      this.bet = Math.min(this.bet + this.getMaxBet() / 10, this.getMaxBet(), this.getMaxBet());
    }
    protected decreaseBet(): void {
      this.bet = Math.max(this.bet - this.getMaxBet() / 10, 1);
    }

    protected makeAPICall(): void {
      this.casinoService.playDice(this.casinoClient!.casino.id, this.bet).subscribe(
        response => {
          this.gameResult = response;
          this.afterApiCall();
        },
        error => {
          this.playError = this.buiService.extractErrorMessage(error);
        }
      )
    }

    protected afterApiCall(): void {
      this.connectedDashboard.appData.playerData!.total_money -= this.gameResult!.pay;
      this.dice1Interval = setInterval(() => {
        this.dice1 = this.getRandomNumber();
      }, 150);
      this.dice2Interval = setInterval(() => {
        this.dice2 = this.getRandomNumber();
      }, 150);
    }

    public stopDice1(): void {
      this.dice1 = this.gameResult!.res[0];
      clearInterval(this.dice1Interval);
      this.dice1Interval = null;
      this.checkForFinishGame();
    }
    public stopDice2(): void {
      this.dice2 = this.gameResult!.res[1];
      clearInterval(this.dice2Interval);
      this.dice2Interval = null;
      this.checkForFinishGame();
    }

    public checkForFinishGame(): void {
      if(this.dice1Interval === null && this.dice2Interval === null && this.gameStep === "roll dice") {
        let sumResult = this.gameResult!.res[0] + this.gameResult!.res[1];
        if(sumResult === this.getDiceGoal()) {
          this.connectedDashboard.appData.playerData!.total_money += this.gameResult!.gain;
          this.resultMessage = "Félicitation vous avez gagné "+this.gameResult!.gain+" !";
          this.resultMessageColor = "#d18400";
        } else {
          this.resultMessage = "Dommage, peut-être la prochaine fois";
          this.resultMessageColor = "#6e0000";
        }
        this.gameStep = "start";
      }
    }

    protected clickOnPlay(): void {
      if(this.gameStep === "start") {
        this.makeAPICall();
        this.gameStep = "roll dice";
      }
    }
}
