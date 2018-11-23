import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styles: [`
    :host{
      width: 100%;
    }
  `]
})
export class MeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
