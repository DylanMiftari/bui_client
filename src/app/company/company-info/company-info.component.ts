import { Component, Input } from '@angular/core';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';
import { PlayerService } from '../../player/player.service';
import { SharedDataService } from '../../shared-data.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ["../../../assets/style/form.css", './company-info.component.css']
})
export class CompanyInfoComponent {
  @Input() company: Company | undefined;

  constructor(public companyService: CompanyService, public playerService: PlayerService, public sharedData: SharedDataService) {}

  upgradeCompany() {
    this.companyService.upgradeCompany(this.company!.id).subscribe(
      response => {
        window.location.reload();
      }
    )
  }
}
