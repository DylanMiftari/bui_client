import { Component, Input } from '@angular/core';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';
import { PlayerService } from '../../player/player.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrl: './company-info.component.css'
})
export class CompanyInfoComponent {
  @Input() company: Company | undefined;

  constructor(public companyService: CompanyService, public playerService: PlayerService) {}
}
