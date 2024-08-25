import { Component, Input } from '@angular/core';
import { BankClient } from '../../bank-client.model';
import { BankAccountService } from '../../bank-account.service';
import { AppDataService } from '../../../app-data.service';
import { LoadingService } from '../../../loading.service';
import { BuiServiceService } from '../../../bui-service.service';

@Component({
  selector: 'app-debit-credit-form',
  templateUrl: './debit-credit-form.component.html',
  styleUrls: ["../../../../assets/style/form.css", './debit-credit-form.component.css']
})
export class DebitCreditFormComponent {
  @Input() clientData!: BankClient;

  public money: number = 0;

  public error: string = "";

  constructor(private bankAccountService: BankAccountService, public playerData: AppDataService, private loading: LoadingService,
    private buiService: BuiServiceService
  ) {}

  public creditAccount() {
    this.loading.startLoading();
    this.bankAccountService.creditAccount(this.clientData.bank.id, this.money).subscribe(
      response => {
        window.location.reload();
      },
      error => {
        this.error = this.buiService.extractErrorMessage(error);
        this.loading.endLoading();
      }
    )
  }
}
