import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private baseUrl = '';

  constructor(private http: HttpClient, private sharedData: SharedDataService) {
    this.baseUrl = sharedData.baseUrl;
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}api/me`);
  }
}
