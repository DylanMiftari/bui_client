import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthInterceptor } from './auth/auth-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { PlayerMoneyComponent } from './player/player-money/player-money.component';
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';
import { ConnectedDashboardComponent } from './connected-dashboard/connected-dashboard.component';
import { BankCardComponent } from './company/company-card/bank-card/bank-card.component';
import { CasinoCardComponent } from './company/company-card/casino-card/casino-card.component';
import { MafiaCardComponent } from './company/company-card/mafia-card/mafia-card.component';
import { EstateCardComponent } from './company/company-card/estate-card/estate-card.component';
import { FactoryCardComponent } from './company/company-card/factory-card/factory-card.component';
import { SecurityCardComponent } from './company/company-card/security-card/security-card.component';
import { CreateCompanyComponent } from './company/create-company/create-company.component';
import { MinedashboardComponent } from './mine/minedashboard/minedashboard.component';
import { MineComponent } from './mine/mine/mine.component';
import { RemainTimeInMinutePipe } from './mine/remain-time-in-minute.pipe';
import { MineDetailComponent } from './mine/mine-detail/mine-detail.component';
import { ResourceIconComponent } from './resource/resource-icon/resource-icon.component';
import { ShopComponent } from './shop/shop/shop.component';
import { CityComponent } from './city/city/city.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { InTravelComponent } from './player/in-travel/in-travel.component';
import { ChangeCityComponent } from './city/change-city/change-city.component';
import { BankDashboardComponent } from './bank/bank-dashboard/bank-dashboard.component';
import { CompanyInfoComponent } from './company/company-info/company-info.component';
import { BankLevelComponent } from './company/company-level/bank-level/bank-level.component';
import { BankParamFormComponent } from './bank/bank-param-form/bank-param-form.component';
import { BankAccountListComponent } from './bank/bank-account-list/bank-account-list.component';
import { PlayerResourceComponent } from './player/player-resource/player-resource.component';
import { BankAccountTransactionsComponent } from './bank/bank-account-transactions/bank-account-transactions.component';
import { CasinoDashboardComponent } from './casino/casino-dashboard/casino-dashboard.component';
import { CasinoLevelComponent } from './company/company-level/casino-level/casino-level.component';
import { CasinoParamFormComponent } from './casino/casino-param-form/casino-param-form.component';
import { MafiaDashboardComponent } from './mafia/mafia-dashboard/mafia-dashboard.component';
import { MafiaLevelComponent } from './company/company-level/mafia-level/mafia-level.component';
import { FactoryDashboardComponent } from './factory/factory-dashboard/factory-dashboard.component';
import { FactoryLevelComponent } from './company/company-level/factory-level/factory-level.component';
import { EstateDashboardComponent } from './estate/estate-dashboard/estate-dashboard.component';
import { EstateLevelComponent } from './company/company-level/estate-level/estate-level.component';
import { SecurityDashboardComponent } from './security/security-dashboard/security-dashboard.component';
import { SecurityLevelComponent } from './company/company-level/security-level/security-level.component';
import { HomeDashboardComponent } from './home/home-dashboard/home-dashboard.component';
import { HomeCardComponent } from './home/home-card/home-card.component';
import { ClientInterfaceComponent } from './company/client-interface/client-interface.component';
import { BankClientInterfaceComponent } from './bank/bank-client-interface/bank-client-interface.component';
import { OpenAccountComponent } from './bank/bank-client-interface/open-account/open-account.component';
import { AccountInformationComponent } from './bank/bank-client-interface/account-information/account-information.component';
import { PlayerAccountListComponent } from './player/player-account-list/player-account-list.component';
import { DebitCreditFormComponent } from './bank/bank-client-interface/debit-credit-form/debit-credit-form.component';
import { CreditRequestFormComponent } from './bank/bank-client-interface/credit-request-form/credit-request-form.component';
import { CreditRequestListComponent } from './bank/credit-request-list/credit-request-list.component';
import { ClientCreditRequestComponent } from './bank/bank-client-interface/client-credit-request/client-credit-request.component';
import { BankCreditRequestListComponent } from './bank/bank-credit-request-list/bank-credit-request-list.component';
import { CreditRequestFormsComponent } from './bank/credit-request-list/credit-request-forms/credit-request-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PlayerMoneyComponent,
    CompanyDashboardComponent,
    ConnectedDashboardComponent,
    BankCardComponent,
    CasinoCardComponent,
    MafiaCardComponent,
    EstateCardComponent,
    FactoryCardComponent,
    SecurityCardComponent,
    CreateCompanyComponent,
    MinedashboardComponent,
    MineComponent,
    RemainTimeInMinutePipe,
    MineDetailComponent,
    ResourceIconComponent,
    ShopComponent,
    CityComponent,
    CompanyListComponent,
    InTravelComponent,
    ChangeCityComponent,
    BankDashboardComponent,
    CompanyInfoComponent,
    BankLevelComponent,
    BankParamFormComponent,
    BankAccountListComponent,
    PlayerResourceComponent,
    BankAccountTransactionsComponent,
    CasinoDashboardComponent,
    CasinoLevelComponent,
    CasinoParamFormComponent,
    MafiaDashboardComponent,
    MafiaLevelComponent,
    FactoryDashboardComponent,
    FactoryLevelComponent,
    EstateDashboardComponent,
    EstateLevelComponent,
    SecurityDashboardComponent,
    SecurityLevelComponent,
    HomeDashboardComponent,
    HomeCardComponent,
    ClientInterfaceComponent,
    BankClientInterfaceComponent,
    OpenAccountComponent,
    AccountInformationComponent,
    PlayerAccountListComponent,
    DebitCreditFormComponent,
    CreditRequestFormComponent,
    CreditRequestListComponent,
    ClientCreditRequestComponent,
    BankCreditRequestListComponent,
    CreditRequestFormsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } // Enregistre l'intercepteur
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
