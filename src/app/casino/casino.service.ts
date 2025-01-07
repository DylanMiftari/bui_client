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

  public getCasinoClient(idCompany: number): Observable<any> {
    return this.http.get(`${this.sharedData.baseUrl}casino/client/${idCompany}`);
  }

  public getCasinoClientFromCasinoId(idCasino: number): Observable<any> {
    return this.http.get(`${this.sharedData.baseUrl}casino/casino/${idCasino}`);
  }

  public buyTicket(idCompany: number, idCasino: number, isVIP: boolean): Observable<any> {
    return this.http.post(`${this.sharedData.baseUrl}casino/client/${idCompany}/${idCasino}/buy-ticket`, {
      "isVIP": isVIP
    });
  }

  public updateTicketsPrice(idCasino: number, ticketPrice: number, VIPTicketPrice: number): Observable<any> {
    return this.http.patch(`${this.sharedData.baseUrl}casino/${idCasino}/tickets`, {
      "ticketPrice": ticketPrice,
      "VIPTicketPrice": VIPTicketPrice
    });
  }

  public playRoulette(idCasino: number, bet: number): Observable<any> {
    return this.http.post(`${this.sharedData.baseUrl}casino/${idCasino}/game/roulette`, {"bet": bet});
  }

  public playDice(idCasino: number, bet: number): Observable<any> {
    return this.http.post(`${this.sharedData.baseUrl}casino/${idCasino}/game/dice`, {"bet": bet});
  }

  public playPoker(idCasino: number, bet: number): Observable<any> {
    return this.http.post(`${this.sharedData.baseUrl}casino/${idCasino}/game/poker`, {"bet": bet});
  }
}
