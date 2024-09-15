import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../../company/company.model';
import { LoadingService } from '../../loading.service';
import { BankClient } from '../bank-client.model';
import { Bank } from '../bank.model';
import { forkJoin } from 'rxjs';
import { BankService } from '../bank.service';
import { BuiServiceService } from '../../bui-service.service';
import { EnvService } from '../../env.service';

@Component({
  selector: 'app-bank-client-interface',
  templateUrl: './bank-client-interface.component.html',
  styleUrls: ["../../../assets/style/form.css", "../../../assets/style/menu.css",'./bank-client-interface.component.css']
})
export class BankClientInterfaceComponent implements OnInit {
  @Input() company!: Company;

  public error: string = "";

  public clientData: BankClient | undefined;

  constructor(private loading: LoadingService, private bankService: BankService, private buiService: BuiServiceService,
    public env: EnvService
  ) {
  }

  ngOnInit(): void {
    // loading begin in client-interface
    this.bankService.getBankClientData(this.company.id).subscribe(
      response => {
        this.clientData = response;
        this.loading.endLoading();
      },
      error => {
        this.error = this.buiService.extractErrorMessage(error);
        this.loading.endLoading();
      }
    )
  }
}
