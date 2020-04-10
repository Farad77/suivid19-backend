import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  private _urlNotifications = 'https://suivid19-api.herokuapp.com/notifications';
  notifications:any[];

  constructor(private _httpClient: HttpClient, private authService:AuthService, @Inject(SESSION_STORAGE) private storage: StorageService) {
  }

  ngOnInit() {
    this._httpClient.get(this._urlNotifications)
      .subscribe((res:any) => {
        this.notifications = res.filter(this.checkUser);
      });
  }

  checkUser(uneNotification) {
    return uneNotification.user == this.storage.get("user").id;
  }

}
