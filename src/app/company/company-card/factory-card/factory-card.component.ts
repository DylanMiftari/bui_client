import { Component, Input } from '@angular/core';
import { Company } from '../../company.model';

@Component({
  selector: 'app-factory-card',
  templateUrl: './factory-card.component.html',
  styleUrls: ["../../../../assets/style/card.css"]
})
export class FactoryCardComponent {
  @Input() public company: Company | undefined;
}
