import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CreateLaboDto } from '../labo/create-labo-dto';
import { Labo } from '../labo/labo';

@Injectable({
  providedIn: 'root'
})
export class LaboService {
  private _urlGetLabos = 'https://suivid19-api.herokuapp.com/labos';
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

  getLabos() {
    return new Promise(resolve => {
      this._httpClient.get(this._urlGetLabos).subscribe(
        (res: Labo[]) => {
          resolve(res);
        },
        (error) => {
          this.router.navigateByUrl('/labos?error=1');
        }
      );
    });
  }
}
