import { Component } from '@angular/core';
import { City } from '../city.model';
import { CityService } from '../city.service';
import { LoadingService } from '../../loading.service';
import { AppDataService } from '../../app-data.service';
import { Router } from '@angular/router';
import { BuiServiceService } from '../../bui-service.service';

@Component({
  selector: 'app-change-city',
  templateUrl: './change-city.component.html',
  styleUrls: ["../../../assets/style/card.css", './change-city.component.css']
})
export class ChangeCityComponent {
  public cities: Array<City> = [];

  public travelError: string = ""
  
  constructor(public cityService: CityService, private loading: LoadingService, public playerData: AppDataService,
    private router: Router, private buiService: BuiServiceService
  ) {
    this.loading.startLoading();

    this.cityService.getCities().subscribe(
      response => {
        this.cities = response;
        this.loading.endLoading();
      }
    )

  }

  public changeCity(idDest: number) {
    this.loading.startLoading();
    this.cityService.changeCity(idDest).subscribe(
      response => {
        this.playerData.reloadData();
        this.router.navigate(["/intravel"]);
        this.loading.endLoading();
      },
      error => {
        this.travelError = this.buiService.extractErrorMessage(error);
        this.loading.endLoading();
      }
    )
  }
}
