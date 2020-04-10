import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PatientsComponent } from './doctor/patients/patients.component';
import { StatsComponent } from './doctor/stats/stats.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './patient/create/create.component';
import { LogoutComponent } from './logout/logout.component';
import { ChoixPatientComponent } from './patient/choix-patient/choix-patient.component';
import { CreateContactComponent } from './patient/create-contact/create-contact.component';
import { PatientComponent } from './doctor/stats/patient/patient.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    LoginComponent,
    NavbarComponent,
    StatsComponent,
    CreateComponent,
    LogoutComponent,
    ChoixPatientComponent,
    CreateContactComponent,
    PatientComponent,
    PageNotFoundComponent,
    HomeComponent,
    CreateAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    AuthService,
    AuthGuardService,
    MatInputModule,
    MatTableModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
