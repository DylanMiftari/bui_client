import { Component, Input } from '@angular/core';
import { Company } from '../../company.model';

@Component({
  selector: 'app-estate-card',
  templateUrl: './estate-card.component.html',
  styleUrls: ["../../../../assets/style/card.css"]
})
export class EstateCardComponent {
  @Input() public company: Company | undefined;
}
