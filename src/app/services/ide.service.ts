import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Ide } from '../ide/ide';

@Injectable({
  providedIn: 'root'
})
export class IdeService {
  private _urlGetIdes = 'https://suivid19-api.herokuapp.com/ides';

  constructor(private _httpClient: HttpClient, private router: Router) { }

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
