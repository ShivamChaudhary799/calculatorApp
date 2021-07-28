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

  value(num: any) {
    switch (num) {
      case 'ac':
        this.screen = '';
        this.firstvalue = null;
        this.operator = null;
        this.newCursor = false;
        this.iscomma = false;
        break;
      case 'c':
        // this.screen = '0';
        this.screen=this.screen.substr(0, this.screen.length-1);
        this.isc = false;
        this.iscomma = false;
        break;
      case '+/-':
        if (Math.sign(parseInt(this.screen)) === 1) {
          const sign = -Math.abs(parseInt(this.screen));
          this.screen = sign.toString();
        } else if (Math.sign(parseInt(this.screen)) === -1) {
          const sign = Math.abs(parseInt(this.screen));
          this.screen = sign.toString();
        } else {
          this.screen = this.screen;
        }
        break;
      case '%':
        this.addOperator('%');
        break;
      case '+':
        this.addOperator('+');
        break;
      case '-':
        this.addOperator('-');
        break;
      case '*':
        this.addOperator('*');
        break;
      case '/':
        this.addOperator('/');
        break;
      case '=':
        if (this.firstvalue !== null && this.operator !== null) {
          this.result();
        }
        this.operator === null;
        break;
      case '1':
        this.addNumber('1');
        break;
      case '2':
        this.addNumber('2');
        break;
      case '3':
        this.addNumber('3');
        break;
      case '4':
        this.addNumber('4');
        break;
      case '5':
        this.addNumber('5');
        break;
      case '6':
        this.addNumber('6');
        break;
      case '7':
        this.addNumber('7');
        break;
      case '8':
        this.addNumber('8');
        break;
      case '9':
        this.addNumber('9');
        break;
      case '0':
        this.addNumber('0');
        break;
      case '.':
        this.addComma();
        break;
      default:
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

  addNumber(number: any) {
    if(number === '0') {
      if(this.newCursor === true) {
        this.screen = number;
        this.newCursor = false;
      }
      else if(this.screen !== '0') {
        if(this.iscomma === true) {
          this.screen = `${this.screen.toString()}.${number}`;
        }
        else {
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
    // console.log(this.screen[this.screen.length-1]);
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
    }
    this.screen = (this.firstvalue).toString();
  }

  ngOnInit(): void {
  }

}