import { Genre } from './../../../models/genre.model';
import { Movie } from './../../../models/movie.model';
import { GenresService } from './../../../services/genres.service';
import { MoviesService } from './../../../services/movies.service';
import { EditGenresComponent } from './../../genres/edit-genres/edit-genres.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  mode: string;
  genres = [];
  originalMovie: Movie;
  movie = {
    title: '',
    genres: [],
    numberInStock: null,
    dailyRentalRate: null
  }


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditMovieComponent>,
    private dialog: MatDialog,
    private service: GenresService
  ) {

  }

  ngOnInit() {
    this.service.$genres
      .subscribe(genres => {
        this.genres = genres;
      })
    this.service.getGenres();

    this.mode = this.data.mode;
    if (this.mode == 'Edit') {
      this.originalMovie = this.data.movie;
      this.movie.title = this.originalMovie.title;
      this.movie.numberInStock = this.originalMovie.numberInStock;
      this.movie.dailyRentalRate = this.originalMovie.dailyRentalRate;
      this.movie.genres = this.originalMovie.genres.map(g => g._id)
    }
  }

  submission() {
    console.log(this.movie)
    this.dialogRef.close();
  }

  openAddGenreModal() {
    this.dialog.open(EditGenresComponent, {
      data: {
        mode: 'Add'
      }
    })
  }

}
