import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Ide } from '../ide/ide';
import { CreateIdeDto } from '../ide/create-ide-dto';

@Injectable({
  providedIn: 'root'
})
export class IdeService {
  private _urlGetIdes = 'https://suivid19-api.herokuapp.com/ides';
  private _urlCreateIde = 'https://suivid19-api.herokuapp.com/ides';

  constructor(private _httpClient: HttpClient, private router: Router) { }

  create(ide: CreateIdeDto) {
    this._httpClient.post(this._urlCreateIde, {
      lastName: ide.lastName,
      firstName: ide.firstName,
      email: ide.email,
      password: ide.password,
      address: ide.address,
      city: ide.city,
      postalCode: ide.postalCode,
      phone: ide.phone
    }).subscribe(
      (res) => {
        this.router.navigateByUrl('/ides');
      },
      (error) => {
        this.router.navigateByUrl('/ide/create?error=1');
      }
    );
  }

  getIdes() {
    return new Promise(resolve => {
      this._httpClient.get(this._urlGetIdes).subscribe(
        (res: Ide[]) => {
          resolve(res);
        },
        (error) => {
          this.router.navigateByUrl('/ides?error=1');
        }
      );
    });
  }  
}
