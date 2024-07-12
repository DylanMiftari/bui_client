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
    CreateCompanyComponent
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
