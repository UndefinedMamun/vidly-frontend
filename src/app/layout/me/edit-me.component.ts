import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-me',
  templateUrl: './edit-me.component.html',
  styles: [
    `
      mat-card{
        margin: 15px;
      }
    `
  ]
})
export class EditMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
