import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedDataService } from '../shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl: string;

  constructor(private http: HttpClient, private sharedData: SharedDataService) {
    this.baseUrl = sharedData.baseUrl;
  }

  getUserCompanies(): Observable<any> {
    return this.http.get(`${this.baseUrl}company`);
  }

  createCompany(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}company`, data);
  }
}
