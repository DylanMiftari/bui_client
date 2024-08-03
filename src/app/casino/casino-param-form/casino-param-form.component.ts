import { Component, Input } from '@angular/core';
import { Casino } from '../casino.model';
import { LoadingService } from '../../loading.service';
import { CasinoService } from '../casino.service';
import { BuiServiceService } from '../../bui-service.service';

@Component({
  selector: 'app-casino-param-form',
  templateUrl: './casino-param-form.component.html',
  styleUrls: ["../../../assets/style/form.css", './casino-param-form.component.css']
})
export class CasinoParamFormComponent {
  @Input() casino!: Casino;

  public updateTicketError: string = "";
  public updateTicketValid: string = "";

  constructor(private loading: LoadingService, private casinoService: CasinoService, private buiService: BuiServiceService) {}

  updateTicketPrice() {
    this.loading.startLoading();
    this.casinoService.updateTicketsPrice(this.casino.id, this.casino.ticketPrice, this.casino.VIPTicketPrice).subscribe(
      response => {
        this.updateTicketError = "";
        this.updateTicketValid = "Le prix de vos tickets ont bien été mise à jour";
        this.loading.endLoading();
      },
      error => {
        this.updateTicketValid = "";
        this.updateTicketError = this.buiService.extractErrorMessage(error);
        this.loading.endLoading();
      }
    )
  }
}
