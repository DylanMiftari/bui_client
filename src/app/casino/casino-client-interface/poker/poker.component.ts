import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnectedDashboardComponent } from '../../../connected-dashboard/connected-dashboard.component';
import { CasinoClient } from '../../casino-client.model';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../loading.service';
import { CasinoService } from '../../casino.service';
import { EnvService } from '../../../env.service';
import { BuiServiceService } from '../../../bui-service.service';
import { PokerResult } from '../../pokerResult.model';
import { Card } from '../../card.model';

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ["../../../../assets/style/form.css", './poker.component.css']
})
export class PokerComponent implements OnInit {
  @ViewChild(ConnectedDashboardComponent) connectedDashboard!: ConnectedDashboardComponent;
  public casinoId: string|null = null;
  public error: string = "";
  public playError: string = "";
  public casinoClient: CasinoClient|undefined;

  public bet: number = 0;

  public gameResult: PokerResult | undefined;

  public gameStep: string = "start";
  public buttonText: string = "Jouer";
  public resultMessage: string = "";
  public resultMessageColor: string = "#6b0000";

  public cardTexts: Array<string> = ["B", "B", "B", "B", "B"];
  public cardTextColors: Array<string> = ["#555555", "#555555", "#555555", "#555555", "#555555"];
  public cardIcons: Array<string> = ["", "", "", "", ""];

  constructor(private route: ActivatedRoute, private loading: LoadingService, private casinoService: CasinoService, 
        private buiService: BuiServiceService, private env: EnvService
      ) 
  {
    loading.startLoading();
    
    this.casinoId = this.route.snapshot.paramMap.get("casinoId");
    if(this.casinoId === null) {
      this.casinoId = "Aucun id de casino renseigné"
    }
  }

  ngOnInit(): void {
    if(this.casinoId !== null) {
      this.casinoService.getCasinoClientFromCasinoId(+this.casinoId!).subscribe(
        response => {
          this.casinoClient = response;
          if(this.casinoClient!.ticket === null) {
            this.error = "Vous n'avez pas de ticket pour ce casino";
          }
          if(this.casinoClient!.casino.level < this.env.casino_level_for_poker) {
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

  public clickOnPlay() {
    console.log()
    if(this.gameStep === "start") {
      this.makeAPICall();
    } else if(this.gameStep === "finish") {
      this.resetGame();
      this.gameStep = "start";
      this.buttonText = "Jouer";
    }
  }

  protected makeAPICall(): void {
    this.casinoService.playPoker(this.casinoClient!.casino.id, this.bet).subscribe(
      response => {
        this.gameResult = response;
        this.afterApiCall();
      },
      error => {
        this.playError = this.buiService.extractErrorMessage(error);
      }
    )
  }

  public afterApiCall() {
    this.gameStep = "draw card";
    this.connectedDashboard.appData.playerData!.total_money -= this.gameResult!.pay;
  }

  public drawCard(index: number) {
    let card = document.querySelectorAll(".card-to-draw")[index];
    card.classList.remove("card-pack");
    card.classList.add("drawed-card");
    this.cardTexts[index] = this.getLetter(this.gameResult!.res[index]);
    this.cardTextColors[index] = this.getLetterColor(this.gameResult!.res[index]);
    this.cardIcons[index] = this.getCardIconUrl(this.gameResult!.res[index]);
    this.checkForFinish();
  }

  public checkForFinish() {
    if(this.cardTexts.indexOf("B") === -1) {
      this.gameStep = "finish";
      this.buttonText = "Finir";

      if(this.gameResult!.gain === 0) {
        this.resultMessage = "Vous n'avez rien gagné, mais sûrement pour la prochaine fois";
        this.resultMessageColor = "#6e0000";
      } else {
        this.connectedDashboard.appData.playerData!.total_money += this.gameResult!.gain;
        this.resultMessage = "Félicitation vous gagnez "+this.gameResult?.gain+" grâce à votre "+this.gameResult?.hand;
        this.resultMessageColor = "#d18400";
      }
    }
  }

  public resetGame() {
    let cardToDraw = document.querySelectorAll(".card-to-draw");
    for(let i=0; i < cardToDraw.length; i++) {
      cardToDraw[i].classList.remove("drawed-card");
      cardToDraw[i].classList.add("card-pack");
    }
    this.cardTexts = ["B", "B", "B", "B", "B"];
    this.cardTextColors = ["#555555", "#555555", "#555555", "#555555", "#555555"];
    this.cardIcons = ["", "", "", "", ""];
  }

  protected getMaxBet(): number {
    if(this.casinoClient?.ticket.isVIP) {
      return this.casinoClient.casino.pokerMaxVIPBet;
    }
    return this.casinoClient!.casino.pokerMaxBet;
  }

  protected increaseBet(): void {
    this.bet = Math.min(this.bet + this.getMaxBet() / 10, this.getMaxBet(), this.getMaxBet());
  }
  protected decreaseBet(): void {
    this.bet = Math.max(this.bet - this.getMaxBet() / 10, 1);
  }

  public getLetter(card: Card): string {
    if(card.value >= 2 && card.value <= 10) {
        return card.value.toString();
    } else if(card.value === 11) {
        return "J";
    } else if(card.value === 12) {
        return "Q";
    } else if(card.value === 13) {
        return "K";
    } else {
        return "A";
    }
}

public getLetterColor(card: Card): string {
    if(card.color === 2 || card.color === 3) {
        return "#c20300";
    } else {
        return "#000000";
    }
}

public getCardIconUrl(card: Card): string {
  switch (card.color) {
    case 1:
      return "../../../../assets/images/icon/casino-game/clubs.png";
    case 2:
      return "../../../../assets/images/icon/casino-game/diamond.png";
    case 3:
      return "../../../../assets/images/icon/casino-game/hearts.png";
    default:
      return "../../../../assets/images/icon/casino-game/spade.png";
  }
}

  protected getNothingMultiplicator(): number {
    if(this.casinoClient?.ticket.isVIP) {
      return this.casinoClient.casino.nothingVIPMultiplicator;
    }
    return this.casinoClient!.casino.nothingMultiplicator;
  }

  protected getOnePairMultiplicator(): number {
    if(this.casinoClient?.ticket.isVIP) {
      return this.casinoClient.casino.onePairVIPMultiplicator;
    }
    return this.casinoClient!.casino.onePairMultiplicator;
  }

  protected getTwoPairMultiplicator(): number {
    if(this.casinoClient?.ticket.isVIP) {
      return this.casinoClient.casino.twoPairVIPMultiplicator;
    }
    return this.casinoClient!.casino.twoPairMultiplicator;
  }

  protected getThreeOfAKindMultiplicator(): number {
    if(this.casinoClient?.ticket.isVIP) {
      return this.casinoClient.casino.threeOfAKindVIPMultiplicator;
    }
    return this.casinoClient!.casino.threeOfAKindMultiplicator;
  }

  protected getStraightMultiplicator(): number {
    if(this.casinoClient?.ticket.isVIP) {
      return this.casinoClient.casino.straightVIPMultiplicator;
    }
    return this.casinoClient!.casino.straightMultiplicator;
  }

  protected getFlushMultiplicator(): number {
    if(this.casinoClient?.ticket.isVIP) {
      return this.casinoClient.casino.flushVIPMultiplicator;
    }
    return this.casinoClient!.casino.flushMultiplicator;
  }

  protected getFullHouseMultiplicator(): number {
    if(this.casinoClient?.ticket.isVIP) {
      return this.casinoClient.casino.fullHouseVIPMultiplicator;
    }
    return this.casinoClient!.casino.fullHouseMultiplicator;
  }

  protected getFourOfAKindMultiplicator(): number {
    if(this.casinoClient?.ticket.isVIP) {
      return this.casinoClient.casino.fourOfAKindVIPMultiplicator;
    }
    return this.casinoClient!.casino.fourOfAKindMultiplicator;
  }

  protected getStraightFlushMultiplicator(): number {
    if(this.casinoClient?.ticket.isVIP) {
      return this.casinoClient.casino.straightFlushVIPMultiplicator;
    }
    return this.casinoClient!.casino.straightFlushMultiplicator;
  }

  protected getRoyalFlushMultiplicator(): number {
    if(this.casinoClient?.ticket.isVIP) {
      return this.casinoClient.casino.royalFlushVIPMultiplicator;
    }
    return this.casinoClient!.casino.royalFlushMultiplicator;
  }
}
