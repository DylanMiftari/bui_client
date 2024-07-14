import { Injectable } from '@angular/core';
import { PlayerService } from './player/player.service';
import { SharedData } from './shared-data.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor(private http: HttpClient) {
    this.getData().subscribe(
      response => {
        this.sharedData = response;
      }
    )
  }

  public baseUrl = 'http://127.0.0.1:8000/';
  public sharedData: SharedData | undefined;
  public maxCompaniesPerPlayer = 3;

  private getData(): Observable<any> {
    return this.http.get(`${this.baseUrl}api/data`)
  }
}
