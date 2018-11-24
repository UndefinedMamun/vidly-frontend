import { server } from './global';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url = server + '/api/movies';

  constructor(private http: Http) { }

  getMovies() {
    this.http.get(this.url)
      .subscribe(res => {
        console.log(res.json())
      })
  }
}
