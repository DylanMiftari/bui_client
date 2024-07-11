import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedDataService } from '../shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = '';

  constructor(private http: HttpClient, private sharedData: SharedDataService) {
    this.baseUrl = sharedData.baseUrl;
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}auth/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}auth/login`, credentials);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}auth/logout`, {});
  }
}
