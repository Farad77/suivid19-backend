import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CreateLaboDto } from '../labo/create-labo-dto';

@Injectable({
  providedIn: 'root'
})
export class LaboService {
  private _urlCreateLabo = 'https://suivid19-api.herokuapp.com/labos';

  constructor(private _httpClient: HttpClient, private router: Router) { }

  create(labo: CreateLaboDto) {
    this._httpClient.post(this._urlCreateLabo, {
      lastName: labo.lastName,
      firstName: labo.firstName,
      email: labo.email,
      password: labo.password,
      address: labo.address,
      city: labo.city,
      postalCode: labo.postalCode,
      phone: labo.phone,
      company: labo.company
    }).subscribe(
      (res) => {
        this.router.navigateByUrl('/labos');
      },
      (error) => {
        this.router.navigateByUrl('/labo/create?error=1');
      }
    );
  }
}
