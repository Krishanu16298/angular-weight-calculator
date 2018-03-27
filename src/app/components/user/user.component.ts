import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  selval:string;
  toval:string;
  mulIn:number;
  inVal:number;
  isCal:boolean = false;
  calo:boolean = true;
  cal:boolean = false;
  result:number = 0;
  constructor() { }

  ngOnInit() {
  }
  weightcal(){
    this.isCal = true;
    console.log(this.selval);
  }
  start(){
    this.cal = true;
    if(this.selval == 'kilogram'){
      if(this.toval == 'pounds'){
        this.mulIn = 2.20462;
      }
      else if (this.toval == 'grams') {
        this.mulIn = 1000;
      }
      else if (this.toval == 'ounces') {
        this.mulIn = 35.274;
      }
      else if(this.selval == this.toval){
        this.mulIn=1;
      }
    }
    if (this.selval == 'pounds') {
      if (this.toval == 'kilogram') {
        this.mulIn = 0.453592;
      }
      else if (this.toval == 'grams') {
        this.mulIn = 453.592;
      }
      else if (this.toval == 'ounces') {
        this.mulIn = 16;
      }
      else if (this.selval == this.toval) {
        this.mulIn = 1;
      }
    }
    if (this.selval == 'grams') {
      if (this.toval == 'pounds') {
        this.mulIn = 0.00220462;
      }
      else if (this.toval == 'kilogram') {
        this.mulIn = 0.001;
      }
      else if (this.toval == 'ounces') {
        this.mulIn = 0.035274;
      }
      else if (this.selval == this.toval) {
        this.mulIn = 1;
      }
    }
    if (this.selval == 'ounces') {
      if (this.toval == 'pounds') {
        this.mulIn = 0.0625;
      }
      else if (this.toval == 'grams') {
        this.mulIn = 28.3495;
      }
      else if (this.toval == 'kilogram') {
        this.mulIn = 0.0283495;
      }
      else if (this.selval == this.toval) {
        this.mulIn = 1;
      }
    }
  }
  output(){
    this.result = this.inVal*this.mulIn;
    if(this.inVal < 0){
      this.calo = false;
    }
    else{
      this.calo = true;
    }
  }
}
