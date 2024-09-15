import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../loading.service';
import { BankService } from '../../bank.service';
import { BankClient } from '../../bank-client.model';
import { BuiServiceService } from '../../../bui-service.service';
import { CreditRequest } from '../../creditRequest.model';

@Component({
  selector: 'app-client-credit-request',
  templateUrl: './client-credit-request.component.html',
  styleUrl: './client-credit-request.component.css'
})
export class ClientCreditRequestComponent implements OnInit {
  public id: string | null;
  public error: string = "";

  public bankData: BankClient | undefined;
  public creditRequestList: Array<CreditRequest> = [];

  constructor(private route: ActivatedRoute, private loading: LoadingService, private bankService: BankService, 
    private buiService: BuiServiceService
  ) {
    this.loading.startLoading();
    this.id = this.route.snapshot.paramMap.get("companyId");
    if(this.id === null) {
      this.error = "Aucun id de banque renseigné"
    }
  }

  ngOnInit(): void {
    this.bankService.getBankClientData(+this.id!).subscribe(
      response => {
        this.bankData = response;
        this.bankService.getCreditRequest(this.bankData!.bank.id).subscribe(
          response => {
            this.creditRequestList = response;
            this.loading.endLoading();
          }
        );
      },
      error => {
        this.error = this.buiService.extractErrorMessage(error);
        this.loading.endLoading();
      }
    )
  }
}
