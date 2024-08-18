import { Component, Input } from '@angular/core';
import { BankClient } from '../../bank-client.model';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ["../../../../assets/style/form.css", './account-information.component.css']
})
export class AccountInformationComponent {
  @Input() clientData!: BankClient;

  constructor() {}

  public getTotalResource() {
    if(this.clientData.account.bank_resource_account === undefined) {
      return 0;
    }
    let total = 0;
    for(let bankRessourceAccount of this.clientData.account.bank_resource_account) {
      total += bankRessourceAccount.quantity;
    }
    return total;
  }
}
