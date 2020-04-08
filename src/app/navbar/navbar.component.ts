import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  role:string;
  menus:string[];

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.role = this.authService.decodeToken(this.storage.get("id_token")).role;
  }

}
