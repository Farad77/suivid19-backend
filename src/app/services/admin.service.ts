import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateAdminDto } from '../admin/create-admin-dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _urlCreateAdmin = 'https://suivid19-api.herokuapp.com/admins';

  constructor(private _httpClient: HttpClient, private router: Router) { }

  create(admin: CreateAdminDto) {
    this._httpClient.post(this._urlCreateAdmin, {
      lastName: admin.lastName,
      firstName: admin.firstName,
      email: admin.email,
      password: admin.password,
      address: admin.address,
      city: admin.city,
      postalCode: admin.postalCode,
      phone: admin.phone
    }).subscribe(
      (res) => {
        this.router.navigateByUrl('/admins');
      },
      (error) => {
        this.router.navigateByUrl('/admin/create?error=1');
      }
    );
  }
}
