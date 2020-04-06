import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  private _urlPatients = 'https://suivid19-api.herokuapp.com/patients';
  patients:any[];

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
    this._httpClient.get(this._urlPatients)
      .subscribe((res:any) => {
        this.patients = res;
      });
  }
}
