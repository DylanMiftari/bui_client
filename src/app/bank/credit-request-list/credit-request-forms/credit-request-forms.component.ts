import { Component, Input, OnInit } from '@angular/core';
import { CreditRequest } from '../../creditRequest.model';
import { BankService } from '../../bank.service';
import { BuiServiceService } from '../../../bui-service.service';

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

  public error: string = "";

  constructor(private bankService: BankService, private buiService: BuiServiceService) {}

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
    let pronon = this.fromClient ? "En tant que client, " : "En tant que banque, "
    this.commentary = `${pronon} j'ai fixé le taux du prêt à ${this.rate}%\n\n`;
    if(this.money !== this.creditRequest.money) {
      this.commentary += `${pronon} j'ai passé la quantité d'argent demandée de ${this.creditRequest.money.toLocaleString()} à ${this.money.toLocaleString()} car ...\n\n`;
    }
    if(this.weeklyPayments !== this.creditRequest.weeklypayment) {
      this.commentary += `${pronon} j'ai changé la somme de vos paiements hebdomadaire, elle était de ${this.creditRequest.weeklypayment.toLocaleString()} et est passée à ${this.weeklyPayments.toLocaleString()} dans le but de ...\n\n`;
    }
  }

  public updateCreditRequest(status: string) {
    this.bankService.updateCreditRequest(this.creditRequest.bankId, this.creditRequest.id, this.rate, this.money, this.weeklyPayments, 
      this.commentary, status
    ).subscribe(
      response => {
        this.creditRequest.rate = this.rate;
        this.creditRequest.money = this.money;
        this.creditRequest.weeklypayment = this.weeklyPayments;
        this.creditRequest.description += ("\n-------------\n"+this.commentary);
        this.creditRequest.status = status;
      },
      error => {
        this.error = this.buiService.extractErrorMessage(error)
      }
    )
  }

  public updateCreditRequestFromClient(status: string) {
    this.bankService.updateCreditRequestFromClient(this.creditRequest.bankId, this.creditRequest.id, this.rate, this.money, this.weeklyPayments, 
      this.commentary, status
    ).subscribe(
      response => {
        this.creditRequest.rate = this.rate;
        this.creditRequest.money = this.money;
        this.creditRequest.weeklypayment = this.weeklyPayments;
        this.creditRequest.description += ("\n-------------\n"+this.commentary);
        this.creditRequest.status = status;
      },
      error => {
        this.error = this.buiService.extractErrorMessage(error)
      }
    )
  }
}
