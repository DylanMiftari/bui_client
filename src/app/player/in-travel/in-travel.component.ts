import { Component } from '@angular/core';
import { AppDataService } from '../../app-data.service';

@Component({
  selector: 'app-in-travel',
  templateUrl: './in-travel.component.html',
})
export class InTravelComponent {

  constructor(public appData: AppDataService) {}

}
