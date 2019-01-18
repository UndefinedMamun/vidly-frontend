import { CartService } from './../../services/cart.service';
import { Movie } from './../../models/movie.model';
import { GenresService } from 'src/app/services/genres.service';
import { Component, OnInit } from '@angular/core';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MatDialog, MatSelectionList } from '@angular/material';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any;
  genres: any;
  searchString: string;
  selectedGenres: any;

  constructor(
    private dialog: MatDialog,
    private service: MoviesService,
    private genreService: GenresService,
    private cartService: CartService
  ) { }

  filterMovies(genres: MatSelectionList) {
    if (this.searchString) {
      this.movies = this.service.movies.filter((m: Movie) => m.title.toLowerCase().includes(this.searchString.toLowerCase()));
    } else {
      this.movies = this.service.movies;
    }

    if (genres.selectedOptions.selected.length === 0) { return; }

    const selected = genres.selectedOptions.selected.map(obj => obj.value);

    selected.forEach(_id => {
      this.movies = this.movies.filter((m: Movie) => {
        const ids = m.genres.map(g => g._id);
        return ids.includes(_id);
      });
    });

  }

  demo(t) {
    console.log(this.selectedGenres);
  }

  ngOnInit() {
    // this.service.getMovies()
    //   .subscribe(movies => {
    //     this.movies = movies;
    //   });
    this.service.movies$.subscribe(movies=>{
      this.movies = movies;
    });
    this.service.getMovies();

    this.genreService.$genres
      .subscribe(g => this.genres = g);
    this.genreService.getGenres();
  }

  openMovieEditDialog(movie) {
    this.dialog.open(EditMovieComponent, {
      data: {
        mode: 'Edit',
        movie: movie
      }
    });
    this.movies = this.service.movies;
  }

  openMovieAddDialog() {
    this.dialog.open(EditMovieComponent, {
      data: {
        mode: 'Add'
      }
    });
    this.movies = this.service.movies;
  }

  deleteMovie(movie) {
    this.service.deleteMovie(movie);
  }

  addToCart(movie) {
    movie.onCart = true;
    this.cartService.addToCart(movie);
  }

}
