import { Component, Input } from '@angular/core';
import { Company } from '../../company.model';

@Component({
  selector: 'app-mafia-card',
  templateUrl: './mafia-card.component.html',
  styleUrls: ["../../../../assets/style/card.css"]
})
export class MafiaCardComponent {
  @Input() public company: Company | undefined;
}
