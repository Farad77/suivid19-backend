import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-list-admins',
  templateUrl: './list-admins.component.html',
  styleUrls: ['./list-admins.component.css']
})
export class ListAdminsComponent implements OnInit {
  admins: Admin[];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAdmins().then((admins:Admin[]) => {
      this.admins = admins;
      console.log(this.admins);
    });
  }



}
