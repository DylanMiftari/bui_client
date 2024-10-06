import { Component, Input, OnInit } from '@angular/core';
import { Bank } from '../bank.model';
import { CreditRequest } from '../creditRequest.model';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank-credit-request-list',
  templateUrl: './bank-credit-request-list.component.html',
  styleUrl: './bank-credit-request-list.component.css'
})
export class BankCreditRequestListComponent implements OnInit {
  @Input() bank!: Bank | undefined;

  public creditRequests: Array<CreditRequest> = [];

  constructor(private bankService: BankService) {}


  ngOnInit(): void {
    this.bankService.getCreditRequests(this.bank!.id).subscribe(
      response => {
        this.creditRequests = response;
      }
    )
  }
}
