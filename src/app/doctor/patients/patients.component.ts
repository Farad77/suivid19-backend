import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  private _urlPatients = 'https://suivid19-api.herokuapp.com/patients';
  patients:any[];

  constructor(private _httpClient: HttpClient, private authService:AuthService, @Inject(SESSION_STORAGE) private storage: StorageService) {
  }

  ngOnInit() {
    this._httpClient.get(this._urlPatients)
      .subscribe((res:any) => {
        this.patients = res;
      });

      console.log(this.authService.decodeToken(this.storage.get("id_token")));
  }

}
