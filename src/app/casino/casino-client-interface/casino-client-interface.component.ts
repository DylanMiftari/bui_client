import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../../company/company.model';
import { CasinoService } from '../casino.service';
import { BuiServiceService } from '../../bui-service.service';
import { CasinoClient } from '../casino-client.model';
import { LoadingService } from '../../loading.service';
import { EnvService } from '../../env.service';

@Component({
  selector: 'app-casino-client-interface',
  templateUrl: './casino-client-interface.component.html',
  styleUrls: ["../../../assets/style/form.css", "../../../assets/style/card.css", './casino-client-interface.component.css']
})
export class CasinoClientInterfaceComponent implements OnInit {
  @Input() company!: Company;

  public error: string = "";
  public buyError: string = "";

  public casinoClient: CasinoClient|undefined;

  constructor(private casinoService: CasinoService, private buiService: BuiServiceService, private loadingService: LoadingService, 
    public env: EnvService
  ) {}


  ngOnInit(): void {
    this.casinoService.getCasinoClient(this.company.id).subscribe(
      response => {
        this.casinoClient = response;
        this.loadingService.endLoading();
      },
      error => {
        error = this.buiService.extractErrorMessage(error);
        this.loadingService.endLoading();
      }
    )
  }

  getRemainTicket(): number {
    if (this.casinoClient === undefined || this.casinoClient.casino.casinolevel === undefined || this.casinoClient.casino.ticketCount == undefined) {
      return 0;
    }
    return this.casinoClient.casino.casinolevel.nbMaxTicket - this.casinoClient.casino.ticketCount;
  }

  getRemainVIPTicket(): number {
    if (this.casinoClient === undefined || this.casinoClient.casino.casinolevel === undefined || this.casinoClient.casino.VIPTicketCount == undefined) {
      return 0;
    }
    return this.casinoClient.casino.casinolevel.nbMaxVIPTicket - this.casinoClient.casino.VIPTicketCount;
  }

  buyTicket(isVIP: boolean) {
    this.casinoService.buyTicket(this.company.id, this.casinoClient!.casino.id, isVIP).subscribe(
      response => {
        window.location.reload();
      },
      error => {
        this.buyError = this.buiService.extractErrorMessage(error);
      }
    );
  }
}
