import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AdminComponent } from './admin/admin.component';
import { AgentComponent } from './agent/agent.component';
import { DoctorComponent } from './doctor/doctor.component';
import { TestComponent } from './test/test.component';
import { TrackingComponent } from './tracking/tracking.component';
import { TestCompletionsComponent } from './test-completions/test-completions.component';
import { SymptomComponent } from './symptom/symptom.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PatientsComponent } from './patient/patients/patients.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NotificationsComponent,
    AdminComponent,
    AgentComponent,
    DoctorComponent,
    TestComponent,
    TrackingComponent,
    TestCompletionsComponent,
    SymptomComponent,
    PatientsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
