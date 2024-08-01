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
