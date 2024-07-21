import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';
import { CreateCompanyComponent } from './company/create-company/create-company.component';
import { MinedashboardComponent } from './mine/minedashboard/minedashboard.component';
import { MineDetailComponent } from './mine/mine-detail/mine-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: "company/dashboard", component: CompanyDashboardComponent},
  { path: "company/create", component: CreateCompanyComponent},
  { path: "mine/dashboard", component: MinedashboardComponent},
  { path: "mine/:id", component: MineDetailComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
