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
      return this._httpClient.post(this._urlLogin, {username, password});
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn,'second');

    this.storage.set('id_token', authResult.idToken);
    this.storage.set("expires_at", JSON.stringify(expiresAt.valueOf()) );
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
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  }
}