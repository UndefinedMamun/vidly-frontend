import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private service: AuthService) { }

  ngOnInit() {
    this.service.isLoggedIn()
  }

  logout() {
    this.service.logout();
  }

}
