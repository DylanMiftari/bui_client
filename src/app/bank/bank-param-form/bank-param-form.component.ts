import { Component, Input } from '@angular/core';
import { Bank } from '../bank.model';
import { BankService } from '../bank.service';
import { LoadingService } from '../../loading.service';
import { BuiServiceService } from '../../bui-service.service';

@Component({
  selector: 'app-bank-param-form',
  templateUrl: './bank-param-form.component.html',
  styleUrls: ["../../../assets/style/form.css", './bank-param-form.component.css'] 
})
export class BankParamFormComponent {
  @Input() bank!: Bank;

  public formError: string = "";
  public validForm: string = "";

  constructor(private bankService: BankService, private loading: LoadingService, private buiService: BuiServiceService) {}

  editBank() {
    this.loading.startLoading();
    this.bankService.editBank(this.bank.id, this.bank.accountMaintenanceCost, this.bank.transferCost,
      this.bank.maxAccountMoney, this.bank.maxAccountResource).subscribe(
        response => {
          this.loading.endLoading();
          this.validForm = "Informations correctement enregistrées";
          this.formError = "";
        },
        error => {
          this.loading.endLoading();
          this.validForm = "";
          this.formError = this.buiService.extractErrorMessage(error);
        }
      )
  }
}
