import { Injectable } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PlayerResource } from './playerresource.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private sharedData: SharedDataService, private http: HttpClient) { }

  public getPlayerResources(): Observable<any> {
    return this.http.get(`${this.sharedData.baseUrl}resource/player`);
  }

  public getAllResources(): Observable<any> {
    return this.http.get(`${this.sharedData.baseUrl}resource`);
  }

  public sellResources(sellResources: Array<PlayerResource>): Observable<any> {
    let body = [];

    for(let sellRes of sellResources) {
      body.push({"resource_id": sellRes.id, "quantity": sellRes.quantity});
    }

    return this.http.patch(`${this.sharedData.baseUrl}resource/sell`, {"sell_resources": body});
  }
}
