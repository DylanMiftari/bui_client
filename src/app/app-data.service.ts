import { Injectable } from '@angular/core';
import { PlayerService } from './player/player.service';
import { AppData } from './app-data.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  public playerData: AppData | undefined;
  public baseUrl = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient, private loading: LoadingService) {
    loading.startLoading();
    this.getUser().subscribe(
      response => {
        loading.endLoading();
        this.playerData = response;
      }
    )
  }

  public getUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}api/me`);
  }

  public reloadData() {
    this.loading.startLoading();
    this.getUser().subscribe(
      response => {
        this.loading.endLoading();
        this.playerData = response;
      }
    )
  }
}
