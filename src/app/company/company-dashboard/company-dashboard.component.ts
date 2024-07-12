import { Component } from '@angular/core';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';
import { SharedDataService } from '../../shared-data.service';
import { AppDataService } from '../../app-data.service';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css', "../../../assets/style/card.css"]
})
export class CompanyDashboardComponent {

  constructor(public appData: AppDataService, public sharedData: SharedDataService) {
  }
}
