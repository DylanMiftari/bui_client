import { Component, Input, OnInit } from '@angular/core';
import { CreditRequest } from '../../creditRequest.model';

@Component({
  selector: 'app-credit-request-forms',
  templateUrl: './credit-request-forms.component.html',
  styleUrls: ["../../../../assets/style/form.css", './credit-request-forms.component.css']
})
export class CreditRequestFormsComponent implements OnInit {
  @Input() creditRequest!: CreditRequest;
  @Input() fromClient!: boolean;

  // Form var
  public rate: number = 0;
  public money: number = 0;
  public weeklyPayments: number = 1000;
  public commentary: string = "";

  constructor() {}

  ngOnInit(): void {
    this.money = this.creditRequest.money;
    this.weeklyPayments = this.creditRequest.weeklypayment;
  }

  public getMoneyToPay() {
    return Math.round(this.money * (1 + this.rate / 100));
  }

  public getNbWeek() {
    return Math.ceil(this.getMoneyToPay() / this.weeklyPayments);
  }

  public generateCommentary() {
    this.commentary = `J'ai fixé le taux du prêt à ${this.rate}%\n\n`;
    if(this.money !== this.creditRequest.money) {
      this.commentary += `J'ai passé la quantité d'argent demandée de ${this.creditRequest.money.toLocaleString()} à ${this.money.toLocaleString()} car ...\n\n`;
    }
    if(this.weeklyPayments !== this.creditRequest.weeklypayment) {
      this.commentary += `J'ai changé la somme de vos paiements hebdomadaire, elle était de ${this.creditRequest.weeklypayment.toLocaleString()} et est passée à ${this.weeklyPayments.toLocaleString()} dans le but de ...\n\n`;
    }
  }
}
