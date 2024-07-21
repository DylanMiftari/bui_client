import { Injectable } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { SharedDataService } from '../shared-data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MineService {

  constructor(private playerData: AppDataService, private sharedData: SharedDataService, private http: HttpClient) { }

  public getNbMine(): number {
    if(this.playerData.playerData === undefined) {
      return 0;
    }
    return this.playerData.playerData.mines.length;
  }

  public getNextMinePrice(): number {
    let nbMine = this.getNbMine();
    if(nbMine === 0 || this.sharedData.sharedData === undefined) {
      return 0; // Data not loaded
    }
    return this.sharedData.sharedData.new_mine_prices[nbMine-1];
  }

  public buyNewMine(): void {
    this.http.post(`${this.sharedData.baseUrl}mine/buy`, []).subscribe(
      response => {
        this.playerData.reloadData();
      }
    )
  }

  public getMineData(id: string): Observable<any> {
    return this.http.get(`${this.sharedData.baseUrl}mine/${id}`);
  }

  public upgradeMine(id: string): Observable<any> {
    return this.http.post(`${this.sharedData.baseUrl}mine/${id}/upgrade`, []);
  }
}
