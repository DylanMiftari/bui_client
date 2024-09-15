import { Component, Input } from '@angular/core';
import { CreditRequest } from '../creditRequest.model';
import { EnvService } from '../../env.service';

@Component({
  selector: 'app-credit-request-list',
  templateUrl: './credit-request-list.component.html',
  styleUrls: ["../../../assets/style/card.css", './credit-request-list.component.css']
})
export class CreditRequestListComponent {
  @Input() public creditRequestList: Array<CreditRequest> = [];

  constructor() {}

  public getCreditRequestStatus(status: string) {
    switch(status) {
      case "wait on bank":
        return "En attente de la banque";
      default:
        return "";
    }
  }
}
