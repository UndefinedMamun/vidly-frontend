import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private http: Http,
    public JwtHelper: JwtHelperService,
    private router: Router
  ) {
    // this.isLoggedIn()
  }

  login(credentials) {
    return this.http.post(`${environment.server}/api/auth`, credentials).pipe(
      map(res => {
        let token = res.json().token;
        localStorage.setItem("token", token);
        return true;
      })
    );
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }

  isLoggedIn() {
    // console.log(this.JwtHelper.isTokenExpired())
    // let token = localStorage.getItem('token');
    // console.log(token);
    // let ed = this.JwtHelper.getTokenExpirationDate(token);
    // console.log(ed)

    return !this.JwtHelper.isTokenExpired();
  }
}
