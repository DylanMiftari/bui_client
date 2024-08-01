import { Injectable } from '@angular/core';
import { BankAccount } from './bankAccount.model';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor() {}

  public getTotalResource(bankAccount: BankAccount) {
    if(bankAccount.bank_resource_account === undefined) {
      return 0;
    }
    let total = 0;
    for(let bankResourceAccount of bankAccount.bank_resource_account) {
      total += bankResourceAccount.quantity;
    }

    return total;
  }
}
