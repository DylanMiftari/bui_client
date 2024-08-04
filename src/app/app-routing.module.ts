import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';
import { CreateCompanyComponent } from './company/create-company/create-company.component';
import { MinedashboardComponent } from './mine/minedashboard/minedashboard.component';
import { MineDetailComponent } from './mine/mine-detail/mine-detail.component';
import { ShopComponent } from './shop/shop/shop.component';
import { CityComponent } from './city/city/city.component';
import { InTravelComponent } from './player/in-travel/in-travel.component';
import { travelGuard } from './guard/travel.guard';
import { ChangeCityComponent } from './city/change-city/change-city.component';
import { BankDashboardComponent } from './bank/bank-dashboard/bank-dashboard.component';
import { BankAccountTransactionsComponent } from './bank/bank-account-transactions/bank-account-transactions.component';
import { CasinoDashboardComponent } from './casino/casino-dashboard/casino-dashboard.component';
import { MafiaDashboardComponent } from './mafia/mafia-dashboard/mafia-dashboard.component';
import { FactoryDashboardComponent } from './factory/factory-dashboard/factory-dashboard.component';
import { EstateDashboardComponent } from './estate/estate-dashboard/estate-dashboard.component';
import { SecurityDashboardComponent } from './security/security-dashboard/security-dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [travelGuard]},
  { path: "company/dashboard", component: CompanyDashboardComponent, canActivate: [travelGuard]},
  { path: "company/create", component: CreateCompanyComponent, canActivate: [travelGuard]},
  { path: "mine/dashboard", component: MinedashboardComponent, canActivate: [travelGuard]},
  { path: "mine/:id", component: MineDetailComponent, canActivate: [travelGuard]},
  { path: "shop", component: ShopComponent, canActivate: [travelGuard]},
  { path: "city", component: CityComponent, canActivate: [travelGuard]},
  { path: "intravel", component: InTravelComponent},
  { path: "city/change", component: ChangeCityComponent, canActivate: [travelGuard]},
  { path: "bank/:id", component: BankDashboardComponent, canActivate: [travelGuard] },
  { path: "bank/transactions/:accountId", component: BankAccountTransactionsComponent, canActivate: [travelGuard] },
  { path: "casino/:companyId", component: CasinoDashboardComponent, canActivate: [travelGuard]},
  { path: "mafia/:companyId", component: MafiaDashboardComponent, canActivate: [travelGuard] },
  { path: "factory/:companyId", component: FactoryDashboardComponent, canActivate: [travelGuard] },
  { path: "estate/:companyId", component: EstateDashboardComponent, canActivate: [travelGuard] },
  { path: "security/:companyId", component: SecurityDashboardComponent, canActivate: [travelGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
