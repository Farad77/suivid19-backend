import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  private _urlDocteurs = 'https://suivid19-api.herokuapp.com/doctors';
  private _urlCreatePatient = 'https://suivid19-api.herokuapp.com/patients';
  docteurs:any[];
  docteur:any[];
  form:FormGroup;


  constructor(private fb:FormBuilder, private _httpClient: HttpClient, private authService:AuthService, @Inject(SESSION_STORAGE) private storage: StorageService) {
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
      lastName: ['',Validators.required],
      firstName: ['',Validators.required],
      address: ['',Validators.required],
      city: ['',Validators.required],
      postalCode: ['',Validators.required],
      phone: ['',Validators.required],
      birthday: ['',Validators.required],
      birthmonth: ['',Validators.required],
      birthyear: ['',Validators.required],
      gender: ['',Validators.required],
      isGeolocated: ['',Validators.required],
      isHospitalized: ['',Validators.required],
      doctor: ['',Validators.required]
    });
  }

  ngOnInit() {
    this._httpClient.get(this._urlDocteurs)
      .subscribe((res:any) => {
        this.docteurs = res;
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
    const birthday = val.birthday;
    const birthmonth = val.birthmonth;
    const birthyear = val.birthyear;
    const gender = val.gender;
    //const isGeolocated = val.isGeolocated;
    const isGeolocated = true;
    //const isHospitalized = val.isHospitalized;
    const isHospitalized = true;
    const contacts = null;
    //const doctor = val.doctor;
    const doctor = {id: 1};

    this._httpClient.post(this._urlCreatePatient, {lastName, firstName, email, password, address, city, postalCode, phone, birthday, birthmonth, birthyear, gender, isGeolocated, isHospitalized, contacts, doctor}).subscribe((res:any) => {
      console.log("ok");
    });

  }

}
