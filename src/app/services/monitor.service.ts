import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Monitor } from '../monitor/monitor';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private _urlGetMonitors = 'https://suivid19-api.herokuapp.com/monitors';

  constructor(private _httpClient: HttpClient, private router: Router) { }

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
