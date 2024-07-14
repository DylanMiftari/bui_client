import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Observable } from 'rxjs';
import { AppData } from '../app-data.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private baseUrl = '';

  private playerData: AppData | undefined;

  constructor(private http: HttpClient, private sharedData: SharedDataService) {
    this.baseUrl = sharedData.baseUrl;
    this.getUser().subscribe(
      response => {
        this.playerData = response;
      }
    )
  }

  public getUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}api/me`);
  }

  public checkMoney(cost: number | undefined): boolean {
    let totalMoney: number | undefined = this.playerData?.player.playerMoney;
    return totalMoney !== undefined && cost !== undefined && totalMoney >= cost;
  }
}
