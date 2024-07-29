import { Component } from '@angular/core';
import { SharedDataService } from '../../../shared-data.service';

@Component({
  selector: 'app-bank-level',
  templateUrl: './bank-level.component.html',
  styleUrl: '../company-level.css'
})
export class BankLevelComponent {

  constructor(public sharedData: SharedDataService) {}

}
