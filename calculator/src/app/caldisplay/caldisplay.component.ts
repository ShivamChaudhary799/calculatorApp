import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caldisplay',
  templateUrl: './caldisplay.component.html',
  styleUrls: ['./caldisplay.component.css']
})
export class CaldisplayComponent implements OnInit {
constructor() { }
// variables
toggle = true;
screen = "";
a:any;
b:any;
c:any;
d=0;

// get value
value(number:any) {
  if ((this.b == '+') || (this.b == '-') || (this.b == '*') || (this.b == '/')) {
    this.d=this.d+Number(number);
    this.screen=this.screen+number;
    this.c=this.d;
  }
  else {
    this.screen=this.screen+number;
    this.a=this.screen;
  }
}

// get condition
condition(value:any) {
  this.screen=this.screen+value;
  this.b=value;
}

// give result
result() {
  if ((this.screen[this.screen.length-1] == '+') || (this.screen[this.screen.length-1] == '-') || (this.screen[this.screen.length-1] == '*') || (this.screen[this.screen.length-1] == '/')) return;
  if (this.b=='+') {
    console.log(this.a,this.c);
    this.screen=(Number(this.a)+Number(this.c))+"";
  }
  if (this.b=='-') {
    console.log(this.a,this.c);
    this.screen=(Number(this.a)-Number(this.c))+"";
  }
  if (this.b=='*') {
    console.log(this.a,this.c);
    this.screen=(Number(this.a)*Number(this.c))+"";
  }
  if (this.b=='/') {
    console.log(this.a,this.c);
    this.screen=(Number(this.a)/Number(this.c))+"";
  }
  if (this.b=='%') {
    this.screen= (Number(this.a/100))+"";
  }
}

// clear from last input
clear() {
  if (this.screen != "") {
    this.screen=this.screen.substr(0, this.screen.length-1);
  }
}

// provide decimal
getDecimal() {
  if (!this.screen.includes('.')) {
    this.screen += '.';
  }
}
// convert positive to negative & vice-versa
posneg() {
  if (!this.screen.includes('-')) {
    this.screen = '-' + this.screen;
    this.a = this.screen;
  }
  else if(this.screen[0]==='-') {
    this.screen = this.screen.replace('-','');
  }
}

// Clear full screen
clearAll() {
  this.screen="";
  this.a="";
  this.b="";
  this.c="";
  this.d=0;
}

  ngOnInit(): void {
  }

}