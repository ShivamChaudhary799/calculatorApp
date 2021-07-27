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
array: any = [];
res:any;

// get value
value(number:any) {
  if(this.array.length === 0 && typeof(number) === 'string') {
    return;
  }
  this.screen = this.screen + (number === 10? '.' : number);
  if(Number(this.array[this.array.length-1]) && Number(number)) {
    if (number === 10) {
      console.log(number);
      
      number = '.';
      console.log(number);
    }
  this.array[this.array.length -1] = (this.array[this.array.length-1].toString() + number)
  }
  else {
    this.array.push(number);
  }
    console.log(this.array);
}

// give result
result() {
    if(this.array.length === 0) return;
    if ((this.array[this.array.length-1] == '+') || (this.array[this.array.length-1] == '-') || (this.array[this.array.length-1] == '*') || (this.array[this.array.length-1] == '/')) return;
    let operanarray1 = Number(this.array[0]);
    this.array.forEach((element:any,inarrayex:any) => {
    console.log(element);
    const num = Number(this.array[inarrayex+1]);

    switch (element){
      case '+':
      operanarray1 = operanarray1 + num; 
      break; 
      case '-': 
      operanarray1 = operanarray1 - num; 
      break;
      case '*': 
      operanarray1 = operanarray1 * num;
      break;
      case '/': 
      operanarray1 = operanarray1 / num;
      break;
      case '%': 
      operanarray1 = operanarray1 / 100;
      break;
    }
  });
  this.screen = operanarray1.toString();
}

// // clear from last input
clear() {
  if (this.screen != "") {
    this.screen=this.screen.substr(0, this.screen.length-1);
    this.array.pop();
    console.log(this.array);
  }
}

// // proviarraye arrayecimal
getarrayecimal() {
  if (!this.screen.includes('.')) {
    this.screen += '.';
  }
}
// // convert positive to negative & vice-versa
posneg() {
  if (this.array.length === 0) return; 
  if(Number(this.array[this.array.length-1])){
    if(Number(this.array[this.array.length-1]) > 0) {
    this.array[this.array.length-1] = this.array[this.array.length-1] * -1;
    this.screen = this.array.join('');
    }
  else if(Number(this.array[this.array.length-1]) < 0) {
    this.array[this.array.length-1] = this.array[this.array.length-1] * -1;
    this.screen = this.array.join('');
  }
}
}

// // Clear full screen
clearAll() {
  this.screen="";
  this.array=[];
}

  ngOnInit(): void {
  }

}