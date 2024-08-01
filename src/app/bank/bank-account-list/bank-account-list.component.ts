import { Component, Input, OnInit } from '@angular/core';
import { Bank } from '../bank.model';
import { BankAccount } from '../bankAccount.model';
import { BankService } from '../bank.service';
import { BankAccountService } from '../bank-account.service';

@Component({
  selector: 'app-bank-account-list',
  templateUrl: './bank-account-list.component.html',
  styleUrls: ["../../../assets/style/card.css", './bank-account-list.component.css']
})
export class BankAccountListComponent implements OnInit {
  @Input() bank!: Bank

  public bankAccounts: Array<BankAccount> = [];

  constructor(private bankService: BankService, public bankAccountService: BankAccountService) {}


  ngOnInit(): void {
    this.bankService.getAccounts(this.bank.id).subscribe(
      response => {
        this.bankAccounts = response;
      }
    )
  }

  
}
