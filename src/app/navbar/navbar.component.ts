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
  menus:any[];

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private authService: AuthService) { }

  ngOnInit(): void {
    if(this.storage.get("id_token"))
    {
      this.role = this.authService.decodeToken(this.storage.get("id_token")).role;
      if(this.role == "Admin")
      {
        this.menus = [["Déconnexion", "/logout"], ["Créer un patient", "/patient/create"], ["Consulter les patients", "/doctor/patients"], ["Stats des patients", "/doctor/stats"]];
      }

      else if(this.role == "Doctor")
      {
        this.menus = [["Déconnexion", "/logout"], ["Consulter les patients", "/doctor/patients"], ["Stats des patients", "/doctor/stats"]];
      }

      else if(this.role == "Labo")
      {
        this.menus = [["Déconnexion", "/logout"], ["Créer un patient", "/patient/create"]];
      }
    }

    else
    {
      this.menus = [["Connexion", "/login"]];
    }
    
  }

}
