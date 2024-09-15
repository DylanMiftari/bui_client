import { Component, Input } from '@angular/core';
import { BankClient } from '../../bank-client.model';
import { BankService } from '../../bank.service';
import { BuiServiceService } from '../../../bui-service.service';
import { LoadingService } from '../../../loading.service';

@Component({
  selector: 'app-credit-request-form',
  templateUrl: './credit-request-form.component.html',
  styleUrls: ["../../../../assets/style/form.css", './credit-request-form.component.css']
})
export class CreditRequestFormComponent {
  @Input() public clientData!: BankClient;

  public money: number = 0;
  public weeklypayment: number = 0;
  public description: string = "";

  public error: string = "";
  public valid: string = "";

  constructor(protected bankService: BankService, protected buiService: BuiServiceService, protected loading: LoadingService) {}

  public nbWeek() {
    if(this.money === 0 || this.weeklypayment === 0) {
      return 0;
    }
    return Math.ceil(this.money / this.weeklypayment);
  }

  public sendCreditRequest() {
    this.loading.startLoading();
    this.bankService.makeCreditRequest(this.clientData.bank.id, this.money, this.description, this.weeklypayment).subscribe(
      response => {
        this.valid = "Votre demande de prêt a bien été envoyée";
        this.error = "";
        this.loading.endLoading();
      },
      error => {
        this.valid = "";
        this.error = this.buiService.extractErrorMessage(error);
        this.loading.endLoading();
      }
    );
  }
}
