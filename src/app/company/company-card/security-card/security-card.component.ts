import { Component, Input } from '@angular/core';
import { Company } from '../../company.model';

@Component({
  selector: 'app-security-card',
  templateUrl: './security-card.component.html',
  styleUrls: ["../../../../assets/style/card.css"]
})
export class SecurityCardComponent {
  @Input() public company: Company | undefined;
}
