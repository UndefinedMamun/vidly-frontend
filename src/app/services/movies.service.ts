import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  private url = environment.server + "/api/movies/";
  public movies = [];
  public movies$ = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  emmitMovies() {
    this.movies$.next(this.movies);
  }

  getMovies() {
    if (this.movies.length == 0) {
      this.http
        .get(this.url)
        // .pipe(
        //   map((res: any) => {
        //     this.movies = res;
        //     return this.movies;
        //   })
        // )
        .subscribe((res: any) => {
          this.movies = res;
          this.movies$.next(this.movies);
          this.emmitMovies();
        });
    } else {
      this.emmitMovies();
    }
  }

  addMovie(movie) {
    this.http.post(this.url, movie).subscribe(res => {
      let newMovie = res;
      console.log(newMovie);

      this.movies.push(newMovie);
    });
  }

  editMovie(oldMovie, newMovie) {
    this.http.put(this.url + oldMovie._id, newMovie).subscribe(res => {
      // console.log(res)
      let index = this.movies.indexOf(oldMovie);
      this.movies[index] = res;
    });
  }

  deleteMovie(movie) {
    this.http.delete(this.url + movie._id).subscribe(res => {
      console.log(res);

      let index = this.movies.indexOf(movie);
      this.movies.splice(index, 1);
    });
  }
}
