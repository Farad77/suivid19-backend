import { Component, OnInit, Inject } from '@angular/core';
import { Menu } from './menu';
import { AuthService } from './services/auth.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { UserSession } from './user-session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Suivid19 - BackEnd';

  subscription: any;
  menus: Array<Menu>;
  user: UserSession;

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
      this.menus.push(new Menu('Admin', '#', 'user-secret', ['Admin'], false, [
        new Menu('Créer', '/admin/create', 'plus-circle', ['Admin']),
        new Menu('Lister', '/admins', 'list-alt', ['Admin'])
      ]));
      this.menus.push(new Menu('Docteur', '#', 'user-md', ['Admin'], false, [
        new Menu('Créer', '/doctor/create', 'plus-circle', ['Admin']),
        new Menu('Lister', '/doctors', 'list-alt', ['Admin'])
      ]));
      this.menus.push(new Menu('Ide', '#', 'user-nurse', ['Admin', 'Doctor'], false, [
        new Menu('Lister', '/ides', 'list-alt', ['Admin', 'Doctor'])
      ]));
      this.menus.push(new Menu('Labo', '#', 'hospital-user', ['Admin'], false, [
        new Menu('Créer', '/labo/create', 'plus-circle', ['Admin']),
        new Menu('Lister', '/labos', 'list-alt', ['Admin'])
      ]));
      this.menus.push(new Menu('Patient', '#', 'user-injured', ['Admin', 'Labo', 'Doctor'], false, [
        new Menu('Créer', '/patient/create', 'plus-circle', ['Admin', 'Labo']),
        new Menu('Lister', '/patients', 'list-alt', ['Admin', 'Labo']),
        new Menu('Consulter', '/doctor/patients', 'notes-medical', ['Admin', 'Doctor']),
        new Menu('Statistiques', '/doctor/stats', 'chart-pie', ['Admin', 'Doctor'])
      ]));

      this.user = this.storage.get('user');
    }
  }
}
