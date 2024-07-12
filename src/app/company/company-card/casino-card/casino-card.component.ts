import { Component, Input } from '@angular/core';
import { Company } from '../../company.model';

@Component({
  selector: 'app-casino-card',
  templateUrl: './casino-card.component.html',
  styleUrls: ["../../../../assets/style/card.css"]
})
export class CasinoCardComponent {
  @Input() public company: Company | undefined;
}
