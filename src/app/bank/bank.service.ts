import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient, private sharedData: SharedDataService) { }

  public getBank(idCompany: number): Observable<any> {
    return this.http.get(`${this.sharedData.baseUrl}bank/${idCompany}`);
  }

  public getAccounts(idBank: number): Observable<any> {
    return this.http.get(`${this.sharedData.baseUrl}bank/${idBank}/accounts`);
  }

  public getCreditRequests(idBank:number): Observable<any> {
    return this.http.get(`${this.sharedData.baseUrl}bank/${idBank}/credit-request`);
  }

  public editBank(idBank: number, accountMaintenance: number, transfertRate: number, maxMoney: number, maxResources: number): Observable<any> {
    return this.http.put(`${this.sharedData.baseUrl}bank/edit/${idBank}`, {
      "accountMaintenanceCost": accountMaintenance,
      "transferCost": transfertRate,
      "maxAccountMoney": maxMoney,
      "maxAccountResource": maxResources
    });
  }

  public getBankClientData(idCompany: number): Observable<any> {
    return this.http.get(`${this.sharedData.baseUrl}bank/client/${idCompany}`);
  }

  public openAccount(idBank: number): Observable<any> {
    return this.http.post(`${this.sharedData.baseUrl}bank/client/${idBank}/open-account`, {});
  }

  public getCreditRequest(idBank: number): Observable<any> {
    return this.http.get(`${this.sharedData.baseUrl}bank/client/${idBank}/credit-request`);
  }

  public makeCreditRequest(idBank: number, money: number, description: string, weeklyPayment: number): Observable<any> {
    return this.http.post(`${this.sharedData.baseUrl}bank/client/${idBank}/credit-request`, {
      "money": money,
      "description": description,
      "weeklypayment": weeklyPayment
    });
  }

  public updateCreditRequest(idBank: number, idCreditRequest: number, rate: number|null, money: number|null, 
    weeklyPayments: number|null, description: string|null, status: string|null
  ): Observable<any> {
    return this.http.patch(`${this.sharedData.baseUrl}bank/${idBank}/credit-request/${idCreditRequest}`, {
      "rate": rate,
      "money": money,
      "weeklyPayments": weeklyPayments,
      "description": description,
      "status": status
    });
  }

  public rejectCreditRequest(idBank: number, idCreditRequest: number, description: string|null) {
    return this.http.patch(`${this.sharedData.baseUrl}bank/${idBank}/credit-request/${idCreditRequest}/reject`, {
      "description": description
    });
  }

  public deleteCreditRequest(idBank: number, idCreditRequest: number) {
    return this.http.delete(`${this.sharedData.baseUrl}bank/${idBank}/credit-request/${idCreditRequest}`, {});
  }

  public updateCreditRequestFromClient(idBank: number, idCreditRequest: number, rate: number|null, money: number|null, 
    weeklyPayments: number|null, description: string|null, status: string|null
  ): Observable<any> {
    return this.http.patch(`${this.sharedData.baseUrl}bank/client/${idBank}/credit-request/${idCreditRequest}`, {
      "rate": rate,
      "money": money,
      "weeklyPayments": weeklyPayments,
      "description": description,
      "status": status
    });
  }

  public cancelCreditRequest(idBank: number, idCreditRequest: number, description: string|null) {
    return this.http.patch(`${this.sharedData.baseUrl}bank/client/${idBank}/credit-request/${idCreditRequest}/cancel`, {
      "description": description
    });
  }

  public deleteCreditRequestFromClient(idBank: number, idCreditRequest: number) {
    return this.http.delete(`${this.sharedData.baseUrl}bank/client/${idBank}/credit-request/${idCreditRequest}`, {});
  }
}
