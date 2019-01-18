import { Genre } from "./../models/genre.model";
import { Injectable, EventEmitter } from "@angular/core";
import { environment } from "./../../environments/environment";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GenresService {
  private url = environment.server + "/api/genres/";
  public genres = [];
  public $genres = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  getGenres() {
    this.http.get(this.url).subscribe((res: any) => {
      this.genres = res;
      this.$genres.emit(this.genres);
    });
  }

  addGenre(genre) {
    // genre["_id"] = Date.now();
    // this.genres.push(genre)

    this.http.post(this.url, genre).subscribe(res => {
      let newGenre = res;
      // this.genres.filter(g => g._id == genre._id)
      this.genres.push(newGenre);
      this.$genres.emit(this.genres);
    });
  }

  deleteGenre(genre) {
    this.http.delete(this.url + genre._id).subscribe(res => {
      let index = this.genres.indexOf(genre);
      this.genres.splice(index, 1);
      this.$genres.emit(this.genres);
    });
  }

  updateGenre(genre) {
    this.http.put(this.url + genre._id, { name: genre.name }).subscribe(res => {
      // genre = res;
      // console.log(res)
      this.$genres.emit(this.genres);
    });
  }
}
