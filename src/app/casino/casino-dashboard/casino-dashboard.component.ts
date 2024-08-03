import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../loading.service';
import { Company } from '../../company/company.model';
import { CompanyService } from '../../company/company.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-casino-dashboard',
  templateUrl: './casino-dashboard.component.html',
  styleUrls: ["../../../assets/style/form.css", "../../../assets/style/company-dashboard.css", './casino-dashboard.component.css']
})
export class CasinoDashboardComponent implements OnInit {
  public companyId: string | null;
  public error: string = "";
  public page: string = "company";

  public company: Company | undefined;

  constructor(private route: ActivatedRoute, private loading: LoadingService, private companyService: CompanyService) {

    loading.startLoading();
    this.companyId = this.route.snapshot.paramMap.get("companyId");
    if(this.companyId === null) {
      this.error = "Aucun id de banque renseigné"
    }

  }
  ngOnInit(): void {
    if(this.companyId !== null) {
      forkJoin({
        companyData: this.companyService.getCompany(+this.companyId),
      }).subscribe(
        responses => {
          this.loading.endLoading();
          this.company = responses.companyData;
        }
      )
    }
  }

  public changePage(_page: string) {
    this.page = _page;
  }
}
