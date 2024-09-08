import { Component, Input } from '@angular/core';
import { BankClient } from '../../bank-client.model';

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
}
