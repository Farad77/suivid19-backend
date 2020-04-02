import { Component, OnInit } from '@angular/core';
import { HttpClient, Response } from '@angular/common/http';


export interface PersonsResponse {
  lastName: string,
  firstName: string,
  email: string,
  password: string,
  address: string,
  city: string,
  postalCode: number,
  phone: string,
  birthday: number,
  birthmonth: number,
  birthyear: number,
  gender: number,
  isGeolocated: boolean,
  isHospitalized: boolean,
  relatives: [
    string
  ];
}


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  private _urlPersonnes = 'https://suivid19-api.herokuapp.com/persons';
  utilisateurs:any[];

  constructor(private _httpClient: HttpClient) {
    this.utilisateurs = new Array();
  }

  ngOnInit() {
    this._httpClient.get(this._urlPersonnes)
      .subscribe((res:Response) => {
        this.utilisateurs = res;
      });
  }

}
