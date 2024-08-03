import { Component, Input, OnInit } from '@angular/core';
import { BankAccount } from '../bankAccount.model';
import { BankAccountTransaction } from '../bankAccountTransaction.model';
import { LoadingService } from '../../loading.service';
import { BankAccountService } from '../bank-account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bank-account-transactions',
  templateUrl: './bank-account-transactions.component.html',
  styleUrls: ["../../../assets/style/card.css", './bank-account-transactions.component.css']
})
export class BankAccountTransactionsComponent implements OnInit {
  public bankAccount: BankAccount | undefined;
  public id: string | null;

  public error: string = "";

  constructor(private loading: LoadingService, private bankAccountService: BankAccountService, 
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get("accountId");
  }


  ngOnInit(): void {
    this.loading.startLoading();

    if(this.id !== null) {
      this.bankAccountService.getAccountWith(+this.id, "transactions,player").subscribe(
        response => {
          this.bankAccount = response;
          this.loading.endLoading();
        }
      )
    } else {
      this.error = "Aucun id de compte n'a été entré";
    }
  }
}
