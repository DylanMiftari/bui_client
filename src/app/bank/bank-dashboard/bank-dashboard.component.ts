import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../loading.service';
import { CompanyService } from '../../company/company.service';
import { forkJoin } from 'rxjs';
import { Company } from '../../company/company.model';
import { Bank } from '../bank.model';
import { BankService } from '../bank.service';
import { EnvService } from '../../env.service';

@Component({
  selector: 'app-bank-dashboard',
  templateUrl: './bank-dashboard.component.html',
  styleUrls: ["../../../assets/style/form.css", "../../../assets/style/company-dashboard.css", './bank-dashboard.component.css']
})
export class BankDashboardComponent {
  public id: string | null;

  public error: string = "";

  public page: string = "company"

  public company: Company | undefined;
  public bank: Bank | undefined;

  constructor (private route: ActivatedRoute, private loading: LoadingService, private companyService: CompanyService, 
    private bankService: BankService, public env: EnvService) {
    // URL param
    this.loading.startLoading();
    this.id = this.route.snapshot.paramMap.get("id");
    if(this.id === null) {
      this.error = "Aucun id de banque renseigné"
    } else {

      // Load data
      forkJoin({
        companyData: this.companyService.getCompany(+this.id),
        bankData: this.bankService.getBank(+this.id)
      }).subscribe(
        responses => {
          this.company = responses.companyData;
          this.bank = responses.bankData;
          loading.endLoading();
        },
        error => {
          loading.endLoading();
          if(error.status === 404) {
            this.error = "Aucune entreprise n'existe avec cet id";
          } else if(error.status === 403) {
            this.error = "Cette entreprise ne vous appartient pas"
          }
        }
      );

    }
  }

  public changePage(_page: string) {
    this.page = _page;
  }
}
