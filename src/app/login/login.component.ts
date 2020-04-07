import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder, private authService:AuthService, private router: Router, @Inject(SESSION_STORAGE) private storage: StorageService, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }


  login() {
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService.login(this.route, val.email, val.password);
    }
  }

}
