import { Component, OnInit } from '@angular/core';
import { Monitor } from '../monitor';
import { MonitorService } from 'src/app/services/monitor.service';

@Component({
  selector: 'app-list-monitors',
  templateUrl: './list-monitors.component.html',
  styleUrls: ['./list-monitors.component.css']
})
export class ListMonitorsComponent implements OnInit {
  monitors: Monitor[];

  constructor(private monitorService: MonitorService) { }

  ngOnInit(): void {
    this.monitorService.getMonitors().then((monitors: Monitor[]) => {
      this.monitors = monitors;
      console.log(this.monitors);
    });
  }
}
