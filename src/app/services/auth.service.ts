import { server } from './global';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) {
    // this.isLoggedIn()
  }

  login(credentials) {
    return this.http.post(`${server}/api/auth`, credentials)
      .pipe(
        map(res => {
          let token = res.json().token;
          localStorage.setItem('token', token)
          return true;
        })
      )
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const helper = new JwtHelperService();
    // helper.
    let token = localStorage.getItem('token')

    const decodedToken = helper.decodeToken(token);
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);
    console.log('Expiration', expirationDate)
    console.log('isExpired', isExpired)
    console.log('decodedToken', decodedToken)

  }
}
