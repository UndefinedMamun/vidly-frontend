import { Component, OnInit } from '@angular/core';
import { UsresService } from '../../services/usres.service';

@Component({
  selector: 'app-view-me',
  template: `
    <mat-card>
      <mat-card-title>{{me.name}}</mat-card-title>
      <mat-card-content>{{me.email}}</mat-card-content>
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
  me;

  constructor(private service: UsresService) { }

  ngOnInit() {
    this.service.me$.subscribe(me => {
      this.me = me;
    })
  }

}
