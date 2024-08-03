import { Component } from '@angular/core';
import { SharedDataService } from '../../../shared-data.service';

@Component({
  selector: 'app-casino-level',
  templateUrl: './casino-level.component.html',
  styleUrl: '../company-level.css'
})
export class CasinoLevelComponent {
  constructor(public sharedData: SharedDataService) {}
}
