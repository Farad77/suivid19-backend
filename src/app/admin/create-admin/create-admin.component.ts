import { Component, OnInit } from '@angular/core';
import { CreateAdminDto } from '../create-admin-dto';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {
  admin: CreateAdminDto;

  constructor(private adminService: AdminService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.admin = new CreateAdminDto();
  }

  onSignIn() {
    // TODO : test if valid
    this.adminService.create(this.admin);
  }
}
