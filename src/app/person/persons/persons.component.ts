import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  private _urlPersonnes = 'https://suivid19-api.herokuapp.com/persons';
  utilisateurs:any[];

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
    this._httpClient.get(this._urlPersonnes)
      .subscribe((res:any) => {
        this.utilisateurs = res;
      });
  }

}
