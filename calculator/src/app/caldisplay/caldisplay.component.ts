import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caldisplay',
  templateUrl: './caldisplay.component.html',
  styleUrls: ['./caldisplay.component.css']
})
export class CaldisplayComponent implements OnInit {
  constructor() { }

  toggle = true;
  screen = '';
  firstvalue: any = null;
  operator: any = [];
  newCursor = false;
  isc = false;
  iscomma = false;
  ans: any;
  sqrt: any;
  log: any;

  inverse: boolean = false;
  trig: any;


  expo: any;
  num: any;
  allclear() {
    this.screen = '';
    this.firstvalue = null;
    this.operator = [];
    this.newCursor = false;
    this.iscomma = false;
  }

  backspace() {
    this.screen = this.screen.substr(0, this.screen.length - 1);
    this.isc = false;
    this.iscomma = false;
  }

  posneg() {
    if (Math.sign(parseInt(this.screen)) === 1) {
      const sign = -Math.abs(parseInt(this.screen));
      this.screen = sign.toString();
    } else if (Math.sign(parseInt(this.screen)) === -1) {
      const sign = Math.abs(parseInt(this.screen));
      this.screen = sign.toString();
    } else {
      this.screen = this.screen;
    }
  }

  value(num: any) {
    switch (num) {
      case '=':
        if (this.firstvalue !== null && this.operator !== null) {
          this.result(this.operator, this.screen);
        }
        break;
    }
  }

  addComma() {
    if (this.iscomma === false) {
      this.iscomma = true;
      this.screen = this.screen + '.';
    }
    else {
      this.screen = this.screen;
    }
  }

  openbracket() {
    this.screen = this.screen + '(';
  }

  closebracket() {
    this.screen = this.screen + ')';
  }

  addNumber(number: any) {
    if (0) {
      if (this.newCursor === true) {
        this.screen = number;
        this.newCursor = false;
      }
      else if (this.screen !== '0') {
        if (this.iscomma === true) {
          this.screen = this.screen.toString() + number;
        }
      }
      else if (this.screen === '0') {
        if (this.iscomma === true) {
          this.screen = `${this.screen.toString()}.${number}`;
        }
      }
    }
    else {
      if (this.newCursor === true) {
        this.screen = this.screen + number;
        this.newCursor = false;
      } else if (this.screen === '0') {
        if (this.iscomma === true) {
          if (this.screen.toString().indexOf('.') > -1) {
            this.screen = this.screen.toString() + number;
          }
          else {
            this.screen = `${this.screen.toString()}.${number}`;
          }
        }
        else {
          this.screen = number;
        }
      }
      else {
        if (this.iscomma === true) {
          if (this.screen.toString().indexOf('.') > -1) {
            this.screen = this.screen.toString() + number;
          }
          else {
            this.screen = `${this.screen.toString()}.${number}`;
          }
        }
        else {
          this.screen = this.screen.toString() + number;
        }
      }
    }
    this.isc = true;
  }

  addOperator(op: string) {
    if ((this.screen[this.screen.length - 1] === '+') || (this.screen[this.screen.length - 1] === '-') || (this.screen[this.screen.length - 1] === '*') || (this.screen[this.screen.length - 1] === '/') || (this.screen[this.screen.length - 1] === '%')) return;
    this.operator.push(op);
    if (op === '𝛑') {
      this.screen = this.screen + op;
    }
    else
      this.screen = this.screen + op;
    if (this.newCursor === false) {
      if (this.firstvalue === null) {
        if (this.iscomma === true) {
          this.firstvalue = this.screen;
        }
        else {
          this.firstvalue = this.screen;
        }
      }
      if (this.firstvalue !== null && this.operator !== null) {
        // this.result(this.operator,this.screen);
      }
    }
    this.iscomma = false;

    this.newCursor = true;
  }

  result(ele: any, exp: any): any {
    if (ele.includes('Sin(')) {
      const index = exp.indexOf('Sin(') + 3, end = exp.indexOf(')') === -1 ? exp.length - 1 : exp.indexOf(')');
      this.firstvalue = Math.sin(eval((exp.slice(index + 1, exp[end] === ')' ? end : end + 1))));
      ele = [];
    }
    if (ele.includes('Sin-1(')) {
      const index = exp.indexOf('Sin-1(') + 5, end = exp.indexOf(')') === -1 ? exp.length - 1 : exp.indexOf(')');
      this.firstvalue = Math.asin(eval((exp.slice(index + 1, exp[end] === ')' ? end : end + 1))));
      console.log(this.firstvalue);
      ele = [];
    }
    if (ele.includes('Cos(')) {
      const index = exp.indexOf('Cos(') + 3, end = exp.indexOf(')') === -1 ? exp.length - 1 : exp.indexOf(')');
      this.firstvalue = Math.cos(eval((exp.slice(index + 1, exp[end] === ')' ? end : end + 1))));
      ele = [];
    }
    if (ele.includes('Cos-1(')) {
      const index = exp.indexOf('Cos-1(') + 5, end = exp.indexOf(')') === -1 ? exp.length - 1 : exp.indexOf(')');
      this.firstvalue = Math.acos(eval((exp.slice(index + 1, exp[end] === ')' ? end : end + 1))));
      console.log(this.firstvalue);
      ele = [];
    }
    if (ele.includes('Tan(')) {
      const index = exp.indexOf('Tan(') + 3, end = exp.indexOf(')') === -1 ? exp.length - 1 : exp.indexOf(')');
      this.firstvalue = Math.tan(eval((exp.slice(index + 1, exp[end] === ')' ? end : end + 1))));
      ele = [];
    }
    if (ele.includes('Tan-1(')) {
      const index = exp.indexOf('Tan-1(') + 5, end = exp.indexOf(')') === -1 ? exp.length - 1 : exp.indexOf(')');
      this.firstvalue = Math.atan(eval((exp.slice(index + 1, exp[end] === ')' ? end : end + 1))));
      console.log(this.firstvalue);
      ele = [];
    }
    if (ele.includes('Log(')) {
      const index = exp.indexOf('Log(') + 3, end = exp.indexOf(')') === -1 ? exp.length - 1 : exp.indexOf(')');
      this.firstvalue = Math.log(eval((exp.slice(index + 1, exp[end] === ')' ? end : end + 1))));
      ele = [];
    }
    if (ele.includes('𝛑')) {
      const index = exp.indexOf('𝛑');
      exp = exp.slice(0, index) + '*' + '(3.14)' + (Number(exp[index + 2]) ? "*" : '') + exp.slice(index + 2);
      ele.splice(ele.indexOf('𝛑'), 1);
      this.firstvalue = eval(exp);
      ele = [];
    }
    if (ele.includes('E')) {
      const index = exp.indexOf('E');
      const str = exp.slice(index + 1).split('');
      let str1 = 0;
      for (let i = 0; i < str.length; i++) {
        if (!Number(str[i]) && Number(str[i]) !== 0) break;
        str1 = i;
      }
      const pow = Math.pow(10, Number(str.slice(0, str1 + 1).join('')) ? Number(str.slice(0, str1 + 1).join('')) : 0);
      exp = exp.slice(0, index) + '*' + pow + str.slice(str1 + 1).join('');
      this.firstvalue = eval(exp);
      ele = [];
    }
    switch (ele[ele.length - 1]) {
      case '+':
        if (this.iscomma === true) {
          this.firstvalue = eval(this.screen);
        }
        else {
          this.firstvalue = eval(this.screen);
        }
        break;
      case '-':
        if (this.iscomma === true) {
          this.firstvalue = eval(this.screen);
        }
        else {
          this.firstvalue = eval(this.screen);
        }
        break;
      case '*':
        if (this.iscomma === true) {
          this.firstvalue = eval(this.screen);
        }
        else {
          this.firstvalue = eval(this.screen);
        }
        break;
      case '/':
        if (this.iscomma === true) {
          this.firstvalue = eval(this.screen);
        }
        else {
          this.firstvalue = eval(this.screen);
        }
        break;
      case '%':
        if (this.iscomma === true) {
          this.firstvalue = (this.firstvalue) / 100;
        }
        else {
          this.firstvalue = (this.firstvalue) / 100;
        }
        break;
      case '!':
        this.firstvalue = parseInt(this.firstvalue);
        if (this.iscomma === true) {
          this.ans = 1;
          console.log(this.firstvalue);

          for (let i = 1; i <= this.firstvalue; i++)
            this.ans = this.ans * i;
        }
        else {
          this.ans = 1;
          console.log(this.firstvalue);

          for (let i = 1; i <= this.firstvalue; i++)
            this.ans = this.ans * i;
        }
        this.firstvalue = this.ans;
        break;
      case '^2':
        if (this.iscomma === true) {
          this.firstvalue = this.screen.slice(0, -2);
          this.firstvalue = this.firstvalue * this.firstvalue;
        }
        else {
          this.firstvalue = this.screen.slice(0, -2);
          this.firstvalue = this.firstvalue * this.firstvalue;
        }
        break;
      case '√':
        if (this.iscomma === true) {
          this.sqrt = this.screen.slice(1);
          this.firstvalue = Math.sqrt(this.sqrt);
        }
        else {
          this.sqrt = this.screen.slice(1);
          this.firstvalue = Math.sqrt(this.sqrt);
        }
        break;
    }
    this.screen = (this.firstvalue).toString();
    console.log(typeof (this.screen));
  }

  Symbol() {
    this.inverse = true;
  }
  ngOnInit(): void {
  }

}