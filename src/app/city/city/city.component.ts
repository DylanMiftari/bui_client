import { Component } from '@angular/core';
import { AppDataService } from '../../app-data.service';
import { Company } from '../../company/company.model';
import { CityService } from '../city.service';
import { LoadingService } from '../../loading.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {

  public companies: Array<Company> | undefined;

  constructor(public playerData: AppDataService, private cityService: CityService, private loading: LoadingService) {
    loading.startLoading();

    this.cityService.companyOfCity().subscribe(
      response => {
        loading.endLoading();
        this.companies = response;
      }
    )

  }

}
