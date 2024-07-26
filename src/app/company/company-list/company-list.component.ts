import { Component, Input } from '@angular/core';
import { Company } from '../company.model';
import { SharedDataService } from '../../shared-data.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ["../../../assets/style/card.css", '../../../assets/style/form.css', './company-list.component.css']
})
export class CompanyListComponent {
  @Input() companyList: Array<Company> | undefined;
  @Input() withFilter: boolean = false;

  public companyName: string = "";
  public companyType: string = "";
  public companyLevel: string = "";

  constructor(public sharedData: SharedDataService) {}

  public getFilteredCompanies(): Array<Company> {
    if(this.companyList === undefined) {
      return [];
    }
    let res: Array<Company> = [];

    for(let company of this.companyList) {
      if(
        company.name.toLocaleLowerCase().indexOf(this.companyName.toLocaleLowerCase()) !== -1 &&
        (this.companyType === "" || company.company_type === this.companyType) &&
        (this.companyLevel === "" || company.companylevel === +this.companyLevel)
      ) 
      {
        res.push(company);
      }
    }

    return res;
  }
}
