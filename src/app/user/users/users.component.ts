import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private _bookListUrl = 'https://www.googleapis.com/books/v1/volumes?q=extreme%20programming';
  utilisateurs:Array<any>;

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
    this._httpClient.get(this._bookListUrl)
      .subscribe(googleVolumeListResponse => {

          //this.bookCount = googleVolumeListResponse.totalItems;

          // @TODO: this.bookList = ...

      });
  }

}
