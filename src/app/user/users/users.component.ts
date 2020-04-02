import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private _urlPersonnes = 'https://suivid19-api.herokuapp.com/persons';
  utilisateurs:Array<{}>;

  constructor(private _httpClient: HttpClient) {
    this.utilisateurs = new Array();
  }

  ngOnInit() {
    this._httpClient.get<PersonsResponse>(this._urlPersonnes)
      .subscribe(personsResponse => {
        /*
        personsResponse.lastName
        personsResponse.firstName
        personsResponse.email
        personsResponse.password
        personsResponse.address
        personsResponse.city
        personsResponse.postalCode
        personsResponse.phone
        personsResponse.birthday
        personsResponse.birthmonth
        personsResponse.birthyear
        personsResponse.gender
        personsResponse.isGeolocated
        personsResponse.isHospitalized
        personsResponse.relatives
        
        this.utilisateurs.push();
        */

        console.log(personsResponse);
      });
  }

}
