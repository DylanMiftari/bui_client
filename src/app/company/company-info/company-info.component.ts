import { Component, Input } from '@angular/core';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';
import { PlayerService } from '../../player/player.service';
import { SharedDataService } from '../../shared-data.service';
import { BuiServiceService } from '../../bui-service.service';
import { LoadingService } from '../../loading.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ["../../../assets/style/form.css", './company-info.component.css']
})
export class CompanyInfoComponent {
  @Input() company: Company | undefined;
  @Input() fromClient: boolean = false;

  public error: string = "";

  constructor(public companyService: CompanyService, public playerService: PlayerService, public sharedData: SharedDataService, 
    private buiService: BuiServiceService, private loading: LoadingService
  ) {}

  upgradeCompany() {
    this.loading.startLoading();
    this.companyService.upgradeCompany(this.company!.id).subscribe(
      response => {
        this.loading.endLoading();
        window.location.reload();
      },
      error => {
        this.loading.endLoading();
        this.error = this.buiService.extractErrorMessage(error);
      }
    )
  }
}
