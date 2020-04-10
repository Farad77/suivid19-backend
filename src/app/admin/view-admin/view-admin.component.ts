import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {
  admin: Admin;

  constructor(private adminService: AdminService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.adminService.getAdmin(this.route.snapshot.params.id).then((admin: Admin) => {
      this.admin = admin;
    });
  }

}
