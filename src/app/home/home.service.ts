import { Injectable } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { Observable } from 'rxjs';
import { Home } from './home.model';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from '../shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private sharedData: SharedDataService) { }

}
