import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Observable } from 'rxjs';
import { AppData } from '../app-data.model';
import { AppDataService } from '../app-data.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private appData: AppDataService) {}

  public checkMoney(cost: number | undefined): boolean {
    let totalMoney: number | undefined = this.appData.playerData?.total_money;
    return totalMoney !== undefined && cost !== undefined && totalMoney >= cost;
  }
}
