import { Injectable } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
}
