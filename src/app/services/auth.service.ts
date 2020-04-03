import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable()
export class AuthService {
     

  private _urlLogin = 'https://suivid19-api.herokuapp.com/auth/login';

  constructor(private _httpClient: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService) {
  }
    
  login(username:string, password:string ) {
      this._httpClient.post(this._urlLogin, {username, password}).subscribe((res:any) => {
        this.storage.set('id_token', res.access_token);
        const expiresAt = moment().add(900,'second');
        this.storage.set('expires_at', expiresAt);
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
}