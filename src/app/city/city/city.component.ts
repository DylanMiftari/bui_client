import { Component } from '@angular/core';
import { AppDataService } from '../../app-data.service';
import { Company } from '../../company/company.model';
import { CityService } from '../city.service';
import { LoadingService } from '../../loading.service';
import { PlayerService } from '../../player/player.service';
import { SharedDataService } from '../../shared-data.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ["../../../assets/style/form.css", './city.component.css']
})
export class CityComponent {

  public companies: Array<Company> | undefined;

  constructor(public playerData: AppDataService, private cityService: CityService, private loading: LoadingService, 
    public playerService: PlayerService, public sharedData: SharedDataService
  ) {
    loading.startLoading();

    this.cityService.companyOfCity().subscribe(
      response => {
        loading.endLoading();
        this.companies = response;
      }
    )

  }

}
