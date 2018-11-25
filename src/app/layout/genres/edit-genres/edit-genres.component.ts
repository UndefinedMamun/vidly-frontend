import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-edit-genres',
  templateUrl: './edit-genres.component.html',
  styleUrls: ['./edit-genres.component.css']
})
export class EditGenresComponent implements OnInit {

  mode;
  genre = {
    name: ''
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditGenresComponent>,
    private service: GenresService
  ) {

  }

  ngOnInit() {
    this.mode = this.data.mode;

    if (this.mode == 'Edit') {
      this.genre = this.data.genre;
    }
  }

  submission() {
    if (this.mode == 'Add') {
      this.service.addGenre(this.genre)
    } else {
      this.service.updateGenre(this.genre)
    }
    console.log(this.genre)
    this.dialogRef.close()
  }

}
