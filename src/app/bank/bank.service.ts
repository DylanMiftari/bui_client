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

  public editBank(idBank: number, accountMaintenance: number, transfertRate: number, maxMoney: number, maxResources: number): Observable<any> {
    return this.http.put(`${this.sharedData.baseUrl}bank/edit/${idBank}`, {
      "accountMaintenanceCost": accountMaintenance,
      "transferCost": transfertRate,
      "maxAccountMoney": maxMoney,
      "maxAccountResource": maxResources
    });
  }
}
