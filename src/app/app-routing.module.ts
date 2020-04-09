import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './doctor/patients/patients.component';
import { StatsComponent } from './doctor/stats/stats.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CreateComponent } from './patient/create/create.component';
import { LogoutComponent } from './logout/logout.component';
import { ChoixPatientComponent } from './patient/choix-patient/choix-patient.component';
import { CreateContactComponent } from './patient/create-contact/create-contact.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'doctor/patients', component: PatientsComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Doctor'] } },
  { path: 'doctor/stats', component: StatsComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Doctor'] } },
  { path: 'patient/create', component: CreateComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Labo'] } },
  { path: 'patient/choix-patient', component: ChoixPatientComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Labo'] } },
  { path: 'patient/create-contact/:id', component: CreateContactComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Labo'] } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
