import { Component, OnInit } from '@angular/core';
import { MonitorService } from 'src/app/services/monitor.service';
import { CreateMonitorDto } from '../create-monitor-dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-monitor',
  templateUrl: './create-monitor.component.html',
  styleUrls: ['./create-monitor.component.css']
})
export class CreateMonitorComponent implements OnInit {
  monitor: CreateMonitorDto;

  constructor(private monitorService: MonitorService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.monitor = new CreateMonitorDto();
  }

  onSignIn() {
    // TODO : test if valid
    this.monitorService.create(this.monitor);
  }

}
