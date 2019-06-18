import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-structural-directive]',
  template: '<div *ngFor = "let color of colors; first as f" > <h2>{{f}}{{color}}</h2></div>',

})
export class StructuralDirectiveComponent implements OnInit {


  displayName = true;
  public colors = ["red", "blue","green", "yellow"];

  constructor() { }

  ngOnInit() {
  }

}
