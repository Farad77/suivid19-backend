import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  private _urlPatient: string;
  id: number;
  monPatient: any;

  constructor(private _httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
   this.id = this.activatedRoute.snapshot.params.id;
    this._urlPatient = 'https://suivid19-api.herokuapp.com/patients/' + this.id;


    this._httpClient.get(this._urlPatient)
      .subscribe((res: any) => {
        this.monPatient = res;
        console.log(this.monPatient);
      });
  }

}