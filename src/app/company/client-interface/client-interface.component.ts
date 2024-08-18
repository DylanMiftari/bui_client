import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../loading.service';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';
import { forkJoin } from 'rxjs';
import { BuiServiceService } from '../../bui-service.service';

@Component({
  selector: 'app-client-interface',
  templateUrl: './client-interface.component.html',
  styleUrl: './client-interface.component.css'
})
export class ClientInterfaceComponent implements OnInit {
  public id: string | null;
  public error: string = "";

  public company: Company | undefined;

  constructor(private route: ActivatedRoute, private loading: LoadingService, private companyService: CompanyService, 
    private buiService: BuiServiceService
  ) {
    this.loading.startLoading();
    // loading end is sub-client-interface (bank-client-interface...)
    this.id = this.route.snapshot.paramMap.get("companyId");
    if(this.id === null) {
      this.error = "Aucun id de banque renseigné"
    }
  }


  ngOnInit(): void {
    forkJoin({
      companyRequest: this.companyService.getCompanyFromClient(+this.id!)
    }).subscribe(
      responses => {
        this.company = responses.companyRequest;
      },
      error => {
        this.error = this.buiService.extractErrorMessage(error);
      }
    );
  }
}
