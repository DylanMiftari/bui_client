import { Injectable } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private sharedData: SharedDataService, private http: HttpClient) { }

  public companyOfCity(): Observable<any> {
    return this.http.get(`${this.sharedData.baseUrl}city/company`);
  }
}
