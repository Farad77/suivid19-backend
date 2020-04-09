import { Component, OnInit, Inject } from '@angular/core';
import { Menu } from './menu';
import { AuthService } from './services/auth.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Suivid19 - BackEnd';

  subscription: any;
  menus: Array<Menu>;
  user: User;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private authService: AuthService) {}
  
  ngOnInit(): void {
    this.initSession();

    this.subscription = this.authService.onConnecion
      .subscribe(() => {
        this.initSession();
      });
  }

  initSession() {
    this.menus = Array<Menu>();
    this.user = null;
    
    if (this.authService.isLoggedIn()) {
      this.menus.push(new Menu('Créer un patient', '/patient/create', 'sign-in-alt', ['Admin', 'Labo']));
      this.menus.push(new Menu('Consulter les patients', '/doctor/patients', 'sign-in-alt', ['Admin', 'Doctor']));
      this.menus.push(new Menu('Stats des patients', '/doctor/stats', 'sign-in-alt', ['Admin', 'Doctor']));
      this.user = this.storage.get('user');
    }
  }
}
