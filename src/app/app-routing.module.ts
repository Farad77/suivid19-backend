import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './doctor/patients/patients.component';
import { StatsComponent } from './doctor/stats/stats.component';
import { PatientComponent } from './doctor/stats/patient/patient.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CreatePatientComponent } from './patient/create/create.component';
import { CreateDoctorComponent } from './doctor/create/create.component';
import { LogoutComponent } from './logout/logout.component';
import { ChoixPatientComponent } from './patient/choix-patient/choix-patient.component';
import { CreateContactComponent } from './patient/create-contact/create-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';
import { ListAdminsComponent } from './admin/list-admins/list-admins.component';
import { CreateLaboComponent } from './labo/create-labo/create-labo.component';
import { NotificationsComponent } from './doctor/notifications/notifications.component';
import { ListLabosComponent } from './labo/list-labos/list-labos.component';
import { ListIdesComponent } from './ide/list-ides/list-ides.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Doctor', 'Labo'] } },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'admin/create', component: CreateAdminComponent, canActivate: [AuthGuardService], data: { roles: ['Admin'] } },
  { path: 'admins', component: ListAdminsComponent, canActivate: [AuthGuardService], data: { roles: ['Admin'] } },
  { path: 'labo/create', component: CreateLaboComponent, canActivate: [AuthGuardService], data: { roles: ['Admin'] } },
  { path: 'labos', component: ListLabosComponent, canActivate: [AuthGuardService], data: { roles: ['Admin'] } },
  { path: 'ides', component: ListIdesComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Doctor'] } },
  { path: 'doctor/create', component: CreateDoctorComponent, canActivate: [AuthGuardService], data: { roles: ['Admin'] } },
  { path: 'doctor/notifications', component: NotificationsComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Doctor'] } },
  { path: 'doctor/patients', component: PatientsComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Doctor'] } },
  { path: 'doctor/stats', component: StatsComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Doctor'] } },
  { path: 'patient/create', component: CreatePatientComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Labo'] } },
  { path: 'patients', component: ChoixPatientComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Labo'] } },
  { path: 'patient/create-contact/:id', component: CreateContactComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Labo'] } },
  { path: 'doctor/stats/patient/:id ', component: PatientComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Doctor'] } },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
