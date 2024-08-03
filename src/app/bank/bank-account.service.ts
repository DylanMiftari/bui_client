import { Injectable } from '@angular/core';
import { BankAccount } from './bankAccount.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from '../shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private http: HttpClient, private sharedData: SharedDataService) {}

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

  public getAccount(bankAccountId: number): Observable<any> {
    return this.http.get(`${this.sharedData.baseUrl}bank/account/${bankAccountId}`);
  }

  public getAccountWith(bankAccountId: number, withP: string): Observable<any> {
    return this.http.get(`${this.sharedData.baseUrl}bank/account/${bankAccountId}?with=${withP}`);
  }
}
