import { Component, Input } from '@angular/core';
import { Company } from '../../company.model';

@Component({
  selector: 'app-bank-card',
  templateUrl: './bank-card.component.html',
  styleUrls: ["../../../../assets/style/card.css"]
})
export class BankCardComponent {
  @Input() public company: Company | undefined;
}
