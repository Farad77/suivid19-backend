import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  id:number;
  private _urlCreateContactPatient;
  form:FormGroup;

  constructor(private fb:FormBuilder, private _httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      lastName: ['',Validators.required],
      firstName: ['',Validators.required],
      phone: ['',Validators.required],
      mobile: ['',Validators.required],
      comment: ['',Validators.required]
    });
    
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  }


  createSubmit(){
    const val = this.form.value;

    const lastName = val.lastName;
    const firstName = val.firstName;
    const phone = val.phone;
    const mobile = val.mobile;
    const comment = val.comment;

    this._urlCreateContactPatient = 'https://suivid19-api.herokuapp.com/patients/'+this.id+'/add/contacts';

    this._httpClient.post(this._urlCreateContactPatient, {contacts: [lastName, firstName, phone, mobile, comment]}).subscribe((res:any) => {
      console.log("ok");
    });

  }

}
