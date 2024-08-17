import { Component } from '@angular/core';
import { AppDataService } from '../../app-data.service';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ["../../../assets/style/card.css", './home-dashboard.component.css']
})
export class HomeDashboardComponent {
  constructor(public appData: AppDataService) {}
}
