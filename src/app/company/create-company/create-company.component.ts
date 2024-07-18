import { Component } from '@angular/core';
import { SharedDataService } from '../../shared-data.service';
import { CompanyService } from '../company.service';
import { AppDataService } from '../../app-data.service';
import { Router } from '@angular/router';
import { BuiServiceService } from '../../bui-service.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css', "../../../assets/style/form.css"]
})
export class CreateCompanyComponent {

  public companyData = {
    "name": '',
    "company_type": '',
    // Bank fields
    "accountMaintenanceCost": 0,
    "transferCost": 0,
    "maxAccountMoney": 0,
    "maxAccountResource": 0,
    // Casino fields
    "ticketPrice": 0,
    "rouletteSequenceMultiplicator": 0,
    "rouletteTripletMultiplicator": 0,
    "rouletteTripleSeventMultiplicator": 0,
    "rouletteMaxBet": 0,
  }

  public formError = '';

  constructor(public sharedData: SharedDataService, private companyService: CompanyService,
    private appDataService: AppDataService, private router: Router, private buiService: BuiServiceService) {}

  public createCompany() {
    this.companyService.createCompany(this.companyData).subscribe(
      response => {
        this.appDataService.reloadData();
        this.router.navigate(['/company/dashboard']);
      },
      error => {
        this.formError = this.buiService.extractErrorMessage(error);
      }
    )
  }
}
