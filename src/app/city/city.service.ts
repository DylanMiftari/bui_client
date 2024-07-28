import { Injectable } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { City } from './city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private sharedData: SharedDataService, private http: HttpClient) { }

  public companyOfCity(): Observable<any> {
    return this.http.get(`${this.sharedData.baseUrl}city/company`);
  }

  public getCities(): Observable<any> {
    return this.http.get(`${this.sharedData.baseUrl}city`);
  }

  public changeCity(idDest: number): Observable<any> {
    return this.http.patch(`${this.sharedData.baseUrl}city/change`, {"city_id": idDest});
  }

  public getTimeTravel(city_start: City, city_dest: City): number {
    return this.sharedData.sharedData!.default_travel_time + this.sharedData.sharedData!.travel_tier_multiplicator *
    Math.abs(city_dest.rank - city_start.rank);
  }
}
