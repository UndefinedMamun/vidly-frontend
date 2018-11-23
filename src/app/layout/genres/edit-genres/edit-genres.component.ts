import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

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
    public dialogRef: MatDialogRef<EditGenresComponent>
  ) {

  }

  ngOnInit() {
    this.mode = this.data.mode;
  }

  submission() {
    console.log(this.genre)
    this.dialogRef.close()
  }

}
