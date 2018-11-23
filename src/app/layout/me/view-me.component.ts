import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-me',
  template: `
    <mat-card>
      <mat-card-title>Mr. Umuk</mat-card-title>
      <mat-card-content>bkmmamun@gmail.com</mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      mat-card{
        margin: 15px;
      }
    `
  ]
})
export class ViewMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
