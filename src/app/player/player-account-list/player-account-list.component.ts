import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../loading.service';
import { BankAccountService } from '../../bank/bank-account.service';
import { BankAccount } from '../../bank/bankAccount.model';

@Component({
  selector: 'app-player-account-list',
  templateUrl: './player-account-list.component.html',
  styleUrls: ["../../../assets/style/card.css", './player-account-list.component.css']
})
export class PlayerAccountListComponent implements OnInit {

  public bankAccounts: Array<BankAccount> = [];

  constructor(private loading: LoadingService, private bankAccountService: BankAccountService) {
    loading.startLoading();
  }


  ngOnInit(): void {
    this.bankAccountService.getAccountsOfUser().subscribe(
      response => {
        this.loading.endLoading();
        this.bankAccounts = response;
      }
    )
  }

}
