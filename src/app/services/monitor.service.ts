import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Monitor } from '../monitor/monitor';
import { CreateMonitorDto } from '../monitor/create-monitor-dto';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private _urlGetMonitors = 'https://suivid19-api.herokuapp.com/monitors';
  private _urlCreateMonitor = 'https://suivid19-api.herokuapp.com/monitors';

  constructor(private _httpClient: HttpClient, private router: Router) { }

  create(monitor: CreateMonitorDto) {
    this._httpClient.post(this._urlCreateMonitor, {
      lastName: monitor.lastName,
      firstName: monitor.firstName,
      email: monitor.email,
      password: monitor.password,
      address: monitor.address,
      city: monitor.city,
      postalCode: monitor.postalCode,
      phone: monitor.phone,
      company: monitor.company
    }).subscribe(
      (res) => {
        this.router.navigateByUrl('/monitors');
      },
      (error) => {
        this.router.navigateByUrl('/monitor/create?error=1');
      }
    );
  }

  getMonitors() {
    return new Promise(resolve => {
      this._httpClient.get(this._urlGetMonitors).subscribe(
        (res: Monitor[]) => {
          resolve(res);
        },
        (error) => {
          this.router.navigateByUrl('/monitors?error=1');
        }
      );
    });
  }
}
