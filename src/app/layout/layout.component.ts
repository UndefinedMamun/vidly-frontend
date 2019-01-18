import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { UsresService } from "../services/usres.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"]
})
export class LayoutComponent implements OnInit {
  me: any;

  constructor(
    private authService: AuthService,
    private usersService: UsresService
  ) {}

  ngOnInit() {
    this.authService.isLoggedIn();
    this.usersService.getMe();
    this.usersService.me$.subscribe(me => {
      this.me = me;
    });
  }

  logout() {
    this.authService.logout();
  }
}
