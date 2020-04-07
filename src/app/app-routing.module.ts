import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './doctor/patients/patients.component';
import { StatsComponent } from './doctor/stats/stats.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'doctor/patients', component: PatientsComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'doctor'] } },
  { path: 'doctor/stats', component: StatsComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'doctor'] } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
