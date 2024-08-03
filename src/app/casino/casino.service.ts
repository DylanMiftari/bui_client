import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CasinoService {

  constructor(private http: HttpClient, private sharedData: SharedDataService) {}

  public getCasino(idCompany: number, withP: string = ""): Observable<any> {
    return this.http.get(`${this.sharedData.baseUrl}casino/${idCompany}?with=${withP}`);
  }

  public updateTicketsPrice(idCasino: number, ticketPrice: number, VIPTicketPrice: number): Observable<any> {
    return this.http.patch(`${this.sharedData.baseUrl}casino/${idCasino}/tickets`, {
      "ticketPrice": ticketPrice,
      "VIPTicketPrice": VIPTicketPrice
    });
  }
}
