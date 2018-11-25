import { map } from 'rxjs/operators';
import { server } from './global';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url = server + '/api/movies';
  public movies: any;
  public genres: any;

  constructor(private http: Http) { }

  getMovies() {
    return this.http.get(this.url)
      .pipe(
        map(res => {
          this.movies = res.json();
          return this.movies;
        })
      )
  }

}
