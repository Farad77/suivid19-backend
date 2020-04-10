import { Injectable, Inject, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import * as jwt_decode from "jwt-decode";
import { ActivatedRoute, Router } from '@angular/router';
import { UserSession } from '../user-session';

@Injectable()
export class AuthService {
  onConnecion: EventEmitter<any> = new EventEmitter();
  private _urlLogin = 'https://suivid19-api.herokuapp.com/auth/login';

  constructor(private _httpClient: HttpClient, private router: Router, @Inject(SESSION_STORAGE) private storage: StorageService, private route: ActivatedRoute) {
  }
  
  login(route:ActivatedRoute, username:string, password:string) {
    this._httpClient
      .post(this._urlLogin, { username, password })
      .subscribe(
        (res:any) => {
          this.storage.set('id_token', res.access_token);
          const decodedToken = this.decodeToken(this.storage.get("id_token"));
          const exp = decodedToken.exp;
          const date = new Date(exp*1000);
          const expiresAt = moment(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(), "hh:mm:ss");
          this.storage.set('expires_at', expiresAt);
          this.storage.set('user', new UserSession(decodedToken.id, decodedToken.name, decodedToken.role));

          if (!this.route.snapshot.queryParams['returnUrl'])
          {
            this.router.navigateByUrl('/');
          }
          else
          {
            this.router.navigateByUrl(this.route.snapshot.queryParams['returnUrl']);
          }

          this.onConnecion.emit();
        },
        (error) => {
          this.router.navigateByUrl('/login?error=1');
        }
      );
  }

  logout() {
    this.storage.remove("id_token");
    this.storage.remove("expires_at");
    this.storage.remove("user");
    this.router.navigateByUrl("/");
    this.onConnecion.emit();
  }

  public isLoggedIn() {
    return this.storage.get('user') && moment().isBefore(this.getExpiration());
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