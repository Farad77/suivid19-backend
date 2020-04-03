import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  private _urlPersonnes = 'https://suivid19-api.herokuapp.com/patients';
  patients:any[];

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
    this._httpClient.get(this._urlPersonnes)
      .subscribe((res:any) => {
        this.patients = res;
      });
  }

}
