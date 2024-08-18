import { Component, Input } from '@angular/core';
import { BankClient } from '../../bank-client.model';
import { BankService } from '../../bank.service';
import { BuiServiceService } from '../../../bui-service.service';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ["../../../../assets/style/form.css", './open-account.component.css']
})
export class OpenAccountComponent {
  @Input() clientData!: BankClient;

  public openAccountError: string = "";

  constructor(private bankService: BankService, private buiService: BuiServiceService) {}

  public openAccount() {
    this.bankService.openAccount(this.clientData!.bank.id).subscribe(
      response => {
        window.location.reload();
      },
      error => {
        this.openAccountError = this.buiService.extractErrorMessage(error);
      }
    );
  }
}
