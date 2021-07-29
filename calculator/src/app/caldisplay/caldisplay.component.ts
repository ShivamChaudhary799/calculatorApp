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


  allclear() {
    this.screen = '';
    this.firstvalue = null;
    this.operator = null;
    this.newCursor = false;
    this.iscomma = false;
  }

  backspace() {
    this.screen=this.screen.substr(0, this.screen.length-1);
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
    if(this.iscomma === false) {
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
    if(0) {
      if(this.newCursor === true) {
        this.screen = number;
        this.newCursor = false;
      }
      else if(this.screen !== '0') {
        if(this.iscomma === true) {
          this.screen = this.screen.toString() + number;
        }
      }
      else if(this.screen === '0') {
        if(this.iscomma === true) {
          this.screen = `${this.screen.toString()}.${number}`;
        }
      }
    }
    else {
      if(this.newCursor === true) {
        this.screen = this.screen + number;
        this.newCursor = false;
      } else if(this.screen === '0') {
        if(this.iscomma === true) {
          if(this.screen.toString().indexOf('.') > -1) {
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
        if(this.iscomma === true) {
          if(this.screen.toString().indexOf('.') > -1) {
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
    if ((this.screen[this.screen.length-1] === '+') || (this.screen[this.screen.length-1] === '-') || (this.screen[this.screen.length-1] === '*') || (this.screen[this.screen.length-1] === '/') || (this.screen[this.screen.length-1] === '%')) return;
    this.screen = this.screen + op;
    if(this.newCursor === false) {
      if(this.firstvalue === null) {
        if(this.iscomma === true) {
          this.firstvalue = parseFloat(this.screen);
        }
        else {
          this.firstvalue = parseInt(this.screen);
        }
      }
      if(this.firstvalue !== null && this.operator !== null) {
        this.result();
      }
    }
    this.iscomma = false;
    this.operator = op;
    this.newCursor = true;
  }

  trig(check: any) {
    this.screen = this.screen + check;

    this.operator = check;
  }
  result() {
    switch(this.operator) {
      case '+':
        if(this.iscomma === true) {
          this.firstvalue = eval(this.screen);
        }
        else {
          this.firstvalue = eval(this.screen);
        }
        break;
        case '-':
        if(this.iscomma === true) {
          this.firstvalue = eval(this.screen);
        }
        else {
          this.firstvalue = eval(this.screen);
        }
        break;
        case '*':
        if(this.iscomma === true) {
          this.firstvalue = eval(this.screen);
        }
        else {
          this.firstvalue = eval(this.screen);
        }
        break;
        case '/':
        if(this.iscomma === true) {
          this.firstvalue = eval(this.screen);
        }
        else {
          this.firstvalue = eval(this.screen);
        }
        break;
        case '%':
          if(this.iscomma === true) {
            this.firstvalue = (this.firstvalue)/100;
          }
          else {
            this.firstvalue = (this.firstvalue)/100;
          }
          break;
          case 'Sin': 
          if(this.screen === 'Sin90'){
            this.screen = '1';
          }
    }
    this.screen = (this.firstvalue).toString();
  }

  // trig(check: any) {
  //         this.screen = this.screen + 'Sin';
  //         if(this.screen === 'Sin90') {
  //           this.screen = '1';
  //         }
  // }

  ngOnInit(): void {
  }

}