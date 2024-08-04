import { Component } from '@angular/core';
import { SharedDataService } from '../../../shared-data.service';

@Component({
  selector: 'app-estate-level',
  templateUrl: './estate-level.component.html',
  styleUrl: '../company-level.css'
})
export class EstateLevelComponent {
  constructor(public sharedData: SharedDataService) {}
}
