import { Component } from '@angular/core';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';
import { SharedDataService } from '../../shared-data.service';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css', "../../../assets/style/card.css"]
})
export class CompanyDashboardComponent {
  public companies: Array<Company> | undefined;
  public hasMaxCompanies: boolean = false;

  constructor(private companyService: CompanyService, public sharedData: SharedDataService) {
    this.companyService.getUserCompanies().subscribe(
      response => {
        this.companies = response;
        console.log(this.companies);
        this.hasMaxCompanies = this.companies?.length !== undefined && this.companies?.length >= this.sharedData.maxCompaniesPerPlayer;
      }
    )
  }
}
