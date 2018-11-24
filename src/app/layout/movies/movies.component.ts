import { Component, OnInit } from '@angular/core';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MatDialog } from '@angular/material';

import { MoviesService } from '../../services/movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private service: MoviesService) { }

  ngOnInit() {
    this.service.getMovies()
  }

  openMovieEditDialog() {
    this.dialog.open(EditMovieComponent, {
      data: {
        mode: 'Edit'
      }
    })
  }

  openMovieAddDialog() {
    this.dialog.open(EditMovieComponent, {
      data: {
        mode: 'Add'
      }
    })
  }

}
