import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  //templateUrl: './test.component.html',
  //  template: '<div>Inline template</div>',
  template: '<h2>Welcome </h2><input type="text" [(ngModel)]="name"> {{name}}',
  styles: []
})
export class TestComponent implements OnInit {

public name = "";
public myId = "testId";
public succesClass ="text-success";
public greeting  ="";


  constructor() { }


  ngOnInit() {
  }
  onClick(){
    console.log("welcomde to project of angular e");
    this.greeting = "interpolustion event calling by event"
  }

  getMessage(value){


    console.log(value);
  }
  

greetUser(){

  return "Hello" + this.name;
}
}
