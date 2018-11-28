import { BehaviorSubject } from 'rxjs';
import { server } from './global';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsresService {
  url = server + '/api/users/';
  me$ = new BehaviorSubject({})
  constructor(private http: HttpClient) {
    this.getMe()
  }

  getMe() {
    return this.http.get(this.url + 'me')
      .subscribe(res => {
        this.me$.next(res);
      })
  }
}
