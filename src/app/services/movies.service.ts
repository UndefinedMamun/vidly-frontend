import { map } from 'rxjs/operators';
import { server } from './global';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url = server + '/api/movies/';
  public movies = [];

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

  addMovie(movie) {
    this.http.post(this.url, movie)
      .subscribe(res => {
        let newMovie = res.json()
        console.log(newMovie)

        this.movies.push(newMovie);
      })
  }

  editMovie(oldMovie, newMovie) {
    this.http.put(this.url + oldMovie._id, newMovie)
      .subscribe(res => {
        // console.log(res.json())
        let index = this.movies.indexOf(oldMovie);
        this.movies[index] = res.json()
      })
  }

  deleteMovie(movie) {
    this.http.delete(this.url + movie._id)
      .subscribe(res => {
        console.log(res.json())

        let index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
      })
  }

}
