import { Component } from '@angular/core';
import { SharedDataService } from '../../../shared-data.service';

@Component({
  selector: 'app-mafia-level',
  templateUrl: './mafia-level.component.html',
  styleUrl: '../company-level.css'
})
export class MafiaLevelComponent {
  constructor(public sharedData: SharedDataService) {}
}
