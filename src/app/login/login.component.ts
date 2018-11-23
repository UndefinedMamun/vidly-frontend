import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = {
    email: '',
    password: ''
  };

  invalid = false;

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.service.login(this.model)
      .subscribe(result =>
        this.router.navigate(['/'])
        , err => this.invalid = true)
  }

}
