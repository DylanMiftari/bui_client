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
  @Input() public fromClient: boolean = true;

  // Form var
  public rate: number = 0;

  constructor() {}

  public getCreditRequestStatus(status: string) {
    switch(status) {
      case "wait on bank":
        return "En attente de la banque";
      case "wait on client":
        return "En attente du client";
      case "reject":
        return "Rejetée par la banque";
      case "cancel":
        return "Annulée par le client";
      case "deleted":
        return "Supprimée";
      default:
        return "";
    }
  }
}
