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
  movie = {
    title: 'test',
    genre: ["1", "2"],
    numberInStock: 1,
    dailyRentalRate: 1
  }

  genres = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Blue' },
    { id: 3, name: 'White' },
  ]

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditMovieComponent>,
    private dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.mode = this.data.mode;
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
