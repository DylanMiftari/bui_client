import { Component } from '@angular/core';
import { SharedDataService } from '../../../shared-data.service';

@Component({
  selector: 'app-security-level',
  templateUrl: './security-level.component.html',
  styleUrl: '../company-level.css'
})
export class SecurityLevelComponent {
  constructor(public sharedData: SharedDataService) {}
}
