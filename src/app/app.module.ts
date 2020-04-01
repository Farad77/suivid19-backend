import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AdminComponent } from './admin/admin.component';
import { AgentComponent } from './agent/agent.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PersonComponent } from './person/person.component';
import { TestComponent } from './test/test.component';
import { TrackingComponent } from './tracking/tracking.component';
import { TestCompletionsComponent } from './test-completions/test-completions.component';
import { SymptomComponent } from './symptom/symptom.component';
import { UsersComponent } from './User/users/users.component';
import { StatsComponent } from './user/stats/stats.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotificationsComponent,
    AdminComponent,
    AgentComponent,
    DoctorComponent,
    PersonComponent,
    TestComponent,
    TrackingComponent,
    TestCompletionsComponent,
    SymptomComponent,
    UsersComponent,
    StatsComponent
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
