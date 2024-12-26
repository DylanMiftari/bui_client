import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../../loading.service';
import { CasinoService } from '../../../casino.service';
import { Casino } from '../../../casino.model';
import { CasinoClient } from '../../../casino-client.model';
import { BuiServiceService } from '../../../../bui-service.service';
import { EnvService } from '../../../../env.service';
import { ConnectedDashboardComponent } from '../../../../connected-dashboard/connected-dashboard.component';
import { RouletteResult } from '../../../rouletteResult.model';

@Component({
  selector: 'app-casino-roulette',
  templateUrl: './casino-roulette.component.html',
  styleUrls: ["../../../../../assets/style/form.css", './casino-roulette.component.css']
})
export class CasinoRouletteComponent implements OnInit {
  @ViewChild(ConnectedDashboardComponent) connectedDashboard!: ConnectedDashboardComponent;
  
  public casinoId: string|null = null;
  public error: string = "";
  public playError: string = "";
  public casinoClient: CasinoClient|undefined;

  protected number1: number = 0;
  protected number1Interval: any;
  protected number2: number = 0;
  protected number2Interval: any;
  protected number3: number = 0;
  protected number3Interval: any;

  protected bet: number = 0;

  protected gameStep: string = "bet";
  protected buttonText: string = "Lancer la roulette";

  protected lastResult: RouletteResult|undefined;

  protected resultMessage: string = "";
  protected resultMessageColor: string = "#6b0000";

  constructor(private route: ActivatedRoute, private loading: LoadingService, private casinoService: CasinoService, 
    private buiService: BuiServiceService, private env: EnvService
  ) {
    loading.startLoading();

    this.casinoId = this.route.snapshot.paramMap.get("casinoId");
    if(this.casinoId === null) {
      this.casinoId = "Aucun id de casino renseigné"
    }

    this.number1 = this.getRandomNumber();
    this.number2 = this.getRandomNumber();
    this.number3 = this.getRandomNumber();
  }


  ngOnInit(): void {
    if(this.casinoId !== null) {
      this.casinoService.getCasinoClientFromCasinoId(+this.casinoId!).subscribe(
        response => {
          this.casinoClient = response;
          if(this.casinoClient!.ticket === null) {
            this.error = "Vous n'avez pas de ticket pour ce casino";
          }
          if(this.casinoClient!.casino.level < this.env.casino_level_for_roulette) {
            this.error = "Ce casino ne possède pas le jeu de la roulette"
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
      return this.casinoClient.casino.rouletteMaxVIPBet;
    }
    return this.casinoClient!.casino.rouletteMaxBet;
  }

  protected getSequenceMultiplicator(): number {
    if(this.casinoClient?.ticket.isVIP) {
      return this.casinoClient.casino.rouletteVIPSequenceMultiplicator;
    }
    return this.casinoClient!.casino.rouletteSequenceMultiplicator;
  }

  protected getTripletMultiplicator(): number {
    if(this.casinoClient?.ticket.isVIP) {
      return this.casinoClient.casino.rouletteVIPTripletMultiplcator;
    }
    return this.casinoClient!.casino.rouletteTripletMultiplcator;
  }

  protected getTripleSeventMultiplicator(): number {
    if(this.casinoClient?.ticket.isVIP) {
      return this.casinoClient.casino.rouletteVIPTripleSeventMultiplicator;
    }
    return this.casinoClient!.casino.rouletteTripleSeventMultiplicator;
  }

  protected getRandomNumber(): number {
    return Math.round(Math.random() * 9)
  }

  protected increaseBet(): void {
    this.bet = Math.min(this.bet + this.getMaxBet() / 10, this.getMaxBet(), this.getMaxBet());
  }
  protected decreaseBet(): void {
    this.bet = Math.max(this.bet - this.getMaxBet() / 10, 1);
  }

  protected clickOnPlay(): void {
    if(this.gameStep === "bet") {
      this.sendAPIRequest();
    } else if(this.gameStep === "number1") {
      clearInterval(this.number1Interval);
      this.number1 = +this.lastResult!.res[0];
      this.gameStep = "number2";
    } else if(this.gameStep === "number2") {
      clearInterval(this.number2Interval);
      this.number2 = +this.lastResult!.res[1];
      this.gameStep = "number3";
    } else if(this.gameStep === "number3") {
      clearInterval(this.number3Interval);
      this.number3 = +this.lastResult!.res[2];
      this.gameStep = "bet";
      this.buttonText = "Lancer la roulette";
      this.connectedDashboard.appData.playerData!.total_money += this.lastResult!.gain;
      this.updateResultMessage();
    }
  }

  protected sendAPIRequest(): void {
    this.casinoService.playRoulette(this.casinoClient!.casino.id, this.bet).subscribe(
      response => {
        this.lastResult = response;

        this.afterSend();
      },
      error => {
        this.playError = this.buiService.extractErrorMessage(error);
      }
    )
  }

  protected afterSend(): void {
    this.connectedDashboard.appData.playerData!.total_money -= this.lastResult!.pay;
    this.gameStep = "number1";
    this.buttonText = "Arrêter la rouelette";
    this.number1Interval = setInterval(() => {
      this.number1 = this.getRandomNumber();
    }, 100);
    this.number2Interval = setInterval(() => {
      this.number2 = this.getRandomNumber();
    }, 65);
    this.number3Interval = setInterval(() => {
      this.number3 = this.getRandomNumber();
    }, 35);
  }

  protected updateResultMessage() {
    switch(this.lastResult?.res) {
      case "777":
        this.resultMessage = "C'est un superbe triple 7 !!! Vous gagnez " + this.lastResult.gain;
        this.resultMessageColor = "#d1ae00";
        break;
      case "000":
      case "111":
      case "222":
      case "333":
      case "444":
      case "555":
      case "666":
      case "888":
      case "999":
        this.resultMessage = "C'est un super triplet ! Vous gagnez " + this.lastResult.gain;
        this.resultMessageColor = "#d18400";
        break;
      case "012":
      case "123":
      case "234":
      case "345":
      case "456":
      case "567":
      case "678":
      case "789":
      case "987":
      case "876":
      case "765":
      case "654":
      case "543":
      case "432":
      case "321":
      case "210":
        this.resultMessage = "C'est un sympathique suite ! Vous gagnez " + this.lastResult.gain;
        this.resultMessageColor = "#146e00";
        break;
      default:
        this.resultMessage = "Vous ne gagnez rien cette fois-ci, peut-être la prochaine ?";
        this.resultMessageColor = "#6e0000";
        break;
    }
  }
}
