import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateDoctorComponent implements OnInit {

  private _urlCreateDoctor = 'https://suivid19-api.herokuapp.com/doctors';
  docteurs:any[];
  form:FormGroup;

  estGeolocalise:boolean;
  estHospitalise:boolean;


  constructor(private fb:FormBuilder, private _httpClient: HttpClient, private authService:AuthService, @Inject(SESSION_STORAGE) private storage: StorageService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
      lastName: ['',Validators.required],
      firstName: ['',Validators.required],
      address: ['',Validators.required],
      city: ['',Validators.required],
      postalCode: ['',Validators.required],
      phone: ['',Validators.required],
      isPersonnal: ['',Validators.required]
    });
  }


  createSubmit(){
    const val = this.form.value;

    const lastName = val.lastName;
    const firstName = val.firstName;
    const email = val.email;
    const password = val.password;
    const address = val.address;
    const city = val.city;
    const postalCode = val.postalCode;
    const phone = val.phone;
    const isPersonnal = val.isPersonnal;

    this._httpClient.post(this._urlCreateDoctor, {lastName, firstName, email, password, address, city, postalCode, phone, isPersonnal}).subscribe((res:any) => {
      console.log("ok");
    });

  }

}
