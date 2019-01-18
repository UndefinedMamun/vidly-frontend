import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { environment } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UsresService {
  url = environment.server + "/api/users/";
  me$ = new BehaviorSubject({});
  constructor(private https: HttpClient, private router: Router) {}

  getMe() {
    this.https.get(this.url + "me").subscribe(res => {
      this.me$.next(res);
    });
  }

  getAllUsers() {
    return this.https.get(this.url);
  }

  isEmailTaken(email) {
    return this.https.get(this.url + "isemailtaken/" + email);
  }

  addUser(user) {
    this.https.post(this.url, user, { observe: "response" }).subscribe(res => {
      let token = res.headers.get("x-auth-token");
      localStorage.setItem("token", token);
      this.router.navigate(["/"]);
    });
  }
}
