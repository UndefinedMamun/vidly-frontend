import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { server } from './global';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url = server + '/api/movies/';
  public movies = [];

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.url)
      .pipe(
        map((res: any) => {
          this.movies = res;
          return this.movies;
        })
      )
  }

  addMovie(movie) {
    this.http.post(this.url, movie)
      .subscribe(res => {
        let newMovie = res
        console.log(newMovie)

        this.movies.push(newMovie);
      })
  }

  editMovie(oldMovie, newMovie) {
    this.http.put(this.url + oldMovie._id, newMovie)
      .subscribe(res => {
        // console.log(res)
        let index = this.movies.indexOf(oldMovie);
        this.movies[index] = res
      })
  }

  deleteMovie(movie) {
    this.http.delete(this.url + movie._id)
      .subscribe(res => {
        console.log(res)

        let index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
      })
  }

}
