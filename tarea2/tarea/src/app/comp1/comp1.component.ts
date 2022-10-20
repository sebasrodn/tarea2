import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

 edad=15
 incrementaredad(){
  this.edad+=1
 }

 disminuiredad(){
  this.edad-=1
 }




  constructor() { }

  ngOnInit(): void {
  }

}
