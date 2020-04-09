import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './doctor/patients/patients.component';
import { StatsComponent } from './doctor/stats/stats.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CreateComponent } from './patient/create/create.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Doctor', 'Labo'] } },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'doctor/patients', component: PatientsComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Doctor'] } },
  { path: 'doctor/stats', component: StatsComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Doctor'] } },
  { path: 'patient/create', component: CreateComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Labo'] } },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
