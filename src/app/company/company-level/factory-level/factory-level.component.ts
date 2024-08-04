import { Component } from '@angular/core';
import { SharedDataService } from '../../../shared-data.service';

@Component({
  selector: 'app-factory-level',
  templateUrl: './factory-level.component.html',
  styleUrl: '../company-level.css'
})
export class FactoryLevelComponent {
  constructor(public sharedData: SharedDataService) {}
}
