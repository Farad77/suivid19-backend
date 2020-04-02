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

import { HttpClientModule } from '@angular/common/http';
import { PatientsComponent } from './patient/patients/patients.component';

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
    PatientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
