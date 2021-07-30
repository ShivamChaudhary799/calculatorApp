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
  operator: any = null;
  newCursor = false;
  isc = false;
  iscomma = false;
  ans: any;
  sqrt: any;
  log: any;


  allclear() {
    this.screen = '';
    this.firstvalue = null;
    this.operator = null;
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
          this.result();
        }
        this.operator === null;
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
    this.screen = this.screen + op;
    if (this.newCursor === false) {
      if (this.firstvalue === null) {
        if (this.iscomma === true) {
          this.firstvalue = parseFloat(this.screen);
        }
        else {
          this.firstvalue = parseInt(this.screen);
        }
      }
      if (this.firstvalue !== null && this.operator !== null) {
        this.result();
      }
    }
    this.iscomma = false;
    this.operator = op;
    this.newCursor = true;
  }

  result() {
    switch (this.operator) {
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
        if (this.iscomma === true) {
          this.ans = 1;
          for (let i = 1; i <= this.firstvalue; i++)
            this.ans = this.ans * i;
        }
        else {
          this.ans = 1;
          for (let i = 1; i <= this.firstvalue; i++)
            this.ans = this.ans * i;
        }
        this.firstvalue = this.ans;
        break;
      case 'Sin':
        if (this.iscomma === true) {
          this.firstvalue = Math.sin(Number(this.screen.slice(3))).toFixed(5);
        }
        else {
          this.firstvalue = Math.sin(Number(this.screen.slice(3))).toFixed(5);
        }
        break;
      case 'Cos':
        if (this.iscomma === true) {
          this.firstvalue = Math.cos(Number(this.screen.slice(3))).toFixed(5);
        }
        else {
          this.firstvalue = Math.cos(Number(this.screen.slice(3))).toFixed(5);
        }
        break;
      case 'Tan':
        if (this.iscomma === true) {
          this.firstvalue = Math.tan(Number(this.screen.slice(3))).toFixed(5);
        }
        else {
          this.firstvalue = Math.tan(Number(this.screen.slice(3))).toFixed(5);
        }
        break;
      case '𝛑':
        if (this.iscomma === true) {
          this.firstvalue = this.firstvalue * 3.14159;
        }
        else {
          this.firstvalue = this.firstvalue * 3.14159;
        }
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
      case 'log(':
        if ((this.screen.length - 1).toString() !== ')') return;
        if (this.iscomma === true) {
          this.log = this.screen.slice(4);
          this.firstvalue = (Math.log10(this.log.slice(0, -1))).toFixed(5);
        }
        else {
          this.log = this.screen.slice(4);
          this.firstvalue = (Math.log10(this.log.slice(0, -1))).toFixed(5);
        }
    }
    this.screen = (this.firstvalue).toString();
    console.log(typeof (this.screen));
  }

  ngOnInit(): void {
  }

}