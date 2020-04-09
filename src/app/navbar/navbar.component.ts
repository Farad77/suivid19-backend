import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { AuthService } from '../services/auth.service';
import { Menu } from './menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userRole:string;
  userFullname:string;
  menus:Array<Menu>;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private authService: AuthService) {
    this.userRole = this.storage.get('user')?.role;
    this.userRole = 'Admin';
    this.userFullname = this.storage.get('user')?.name;
  }

  ngOnInit(): void {
    this.menus = Array<Menu>();

    if (this.authService.isLoggedIn()) {
      this.menus.push(new Menu('Déconnexion', '/logout', 'sign-in-alt', ['Admin']));
      this.menus.push(new Menu('Créer un patient', '/patient/create', 'sign-in-alt', ['Admin', 'Labo']));
      this.menus.push(new Menu('Consulter les patients', '/doctor/patients', 'sign-in-alt', ['Admin', 'Doctor']));
      this.menus.push(new Menu('Stats des patients', '/doctor/stats', 'sign-in-alt', ['Admin', 'Doctor']));
    } else {
      this.menus.push(new Menu('Connexion', '/login', 'sign-in-alt'));
    }
    
  }

}
