import { UsresService } from './../services/usres.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private service: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsresService) { }

  ngOnInit() {
  }

  login() {
    this.service.login(this.model)
      .subscribe(result => {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/']);
      }
        , err => this.invalid = true)
  }

}
