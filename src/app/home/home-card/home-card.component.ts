import { Component, Input } from '@angular/core';
import { Home } from '../home.model';
import { AppDataService } from '../../app-data.service';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ["../../../assets/style/card.css", './home-card.component.css']
})
export class HomeCardComponent {
  @Input() home!: Home;

  constructor(private appData: AppDataService) {}

  public inPlayerCity() {
    if(this.appData.playerData === undefined || this.home.house === undefined) {
      return false;
    }
    return this.appData.playerData.city.id === this.home.house.city_id
  }
}
