import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-choix-patient',
  templateUrl: './choix-patient.component.html',
  styleUrls: ['./choix-patient.component.css']
})
export class ChoixPatientComponent implements OnInit {

  private _urlPatients = 'https://suivid19-api.herokuapp.com/patients';
  patients:any[];

  constructor(private _httpClient: HttpClient, private authService:AuthService, @Inject(SESSION_STORAGE) private storage: StorageService) {
  }

  ngOnInit() {
    this._httpClient.get(this._urlPatients)
      .subscribe((res:any) => {
        this.patients = res;
      });
  }

}
