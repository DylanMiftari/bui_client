import { Component } from '@angular/core';
import { SharedDataService } from '../../shared-data.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css', "../../../assets/style/form.css"]
})
export class CreateCompanyComponent {

  public companyData = {
    "name": '',
    "company_type": '',
  }

  constructor(public sharedData: SharedDataService) {}
}
