import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import * as jwt_decode from "jwt-decode";
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class AuthService {
     

  private _urlLogin = 'https://suivid19-api.herokuapp.com/auth/login';

  constructor(private _httpClient: HttpClient, private router: Router, @Inject(SESSION_STORAGE) private storage: StorageService, private route: ActivatedRoute) {
  }
    
  login(route:ActivatedRoute, username:string, password:string) {
    this._httpClient.post(this._urlLogin, {username, password}).subscribe((res:any) => {
      this.storage.set('id_token', res.access_token);
      this.storage.set('expires_at', expiresAt);

      if (!this.route.snapshot.queryParams['returnUrl'])
        this.router.navigateByUrl('/');
      }

      else
      {
        this.router.navigateByUrl(this.route.snapshot.queryParams['returnUrl']);
      }

    });
  }


  logout() {
    this.storage.remove("id_token");
    this.storage.remove("expires_at");
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = this.storage.get("expires_at");
      return moment(expiration);
  }


  decodeToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

}