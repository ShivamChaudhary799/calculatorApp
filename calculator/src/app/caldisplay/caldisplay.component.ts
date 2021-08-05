import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caldisplay',
  templateUrl: './caldisplay.component.html',
  styleUrls: ['./caldisplay.component.css']
})
export class CaldisplayComponent implements OnInit {
  constructor() { }

  // day/night mode toggle
  toggle = true;
  // display screen
  screen = '';
  // Storing a values
  firstvalue: any = null;
  newCursor = false;
  isc = false;
  // Storing an operator
  operator: any = [];
  // Storing a decimal
  decimal = false;
  // Storing a factorial of number
  factorial: any;
  // Storing a square root of number
  sqrt: any;
  // Storing a cube root of number
  cbrt: any;
  // Toggling a inverse button
  inverse: boolean = false;
  // converting a number from radian to degree
  isDegree = false;

  // For clearing a whole display screen
  allclear() {
    this.screen = '';
    this.firstvalue = null;
    this.operator = [];
    this.newCursor = false;
    this.decimal = false;
  }

  // For clearing a digit one by one
  backspace() {
    this.screen = this.screen.substr(0, this.screen.length - 1);
    this.isc = false;
    this.decimal = false;
  }

  // For converting a number from positive to negative & vice-versa
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

  // for result
  value(num: any) {
    switch (num) {
      case '=':
        if (this.firstvalue !== null && this.operator !== null) {
          this.result(this.operator, this.screen);
        }
        break;
    }
  }

  // For adding a decimal
  addComma() {
    if (this.decimal === false) {
      this.decimal = true;
      this.screen = this.screen + '.';
    }
    else {
      this.screen = this.screen;
    }
  }

  // For adding a open bracket
  openbracket() {
    this.screen = this.screen + '(';
  }

  // For adding a close bracket
  closebracket() {
    this.screen = this.screen + ')';
  }

  // For adding a number
  addNumber(number: any) {
    if (0) {
      if (this.newCursor === true) {
        this.screen = number;
        this.newCursor = false;
      }
      else if (this.screen !== '0') {
        if (this.decimal === true) {
          this.screen = this.screen.toString() + number;
        }
      }
      else if (this.screen === '0') {
        if (this.decimal === true) {
          this.screen = `${this.screen.toString()}.${number}`;
        }
      }
    }
    else {
      if (this.newCursor === true) {
        this.screen = this.screen + number;
        this.newCursor = false;
      } else if (this.screen === '0') {
        if (this.decimal === true) {
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
        if (this.decimal === true) {
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

  // for pushing an operator
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
        if (this.decimal === true) {
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
    this.decimal = false;
    this.newCursor = true;
  }

  result(ele: any, exp: any): any {
    // For Sine operation
    if (ele.includes('Sin(')) {
      const index = exp.indexOf('Sin(') + 3, end = exp.indexOf(')') === -1 ? exp.length - 1 : exp.indexOf(')');
      this.firstvalue = Math.sin(eval(exp.slice(index + 1, exp[end] === ')' ? end : end + 1)));
      if (this.isDegree === true) {
        this.firstvalue = (Math.sin(eval(exp.slice(index + 1, exp[end] === ')' ? end : end + 1)) * 3.14159265359 / 180));
      }
      ele = [];
    }
    // For Sine inverse operation
    if (ele.includes('Sin-1(')) {
      const index = exp.indexOf('Sin-1(') + 5, end = exp.indexOf(')') === -1 ? exp.length - 1 : exp.indexOf(')');
      this.firstvalue = Math.asin(eval((exp.slice(index + 1, exp[end] === ')' ? end : end + 1))));
      if (this.isDegree === true) {
        this.firstvalue = (Math.asin(eval(exp.slice(index + 1, exp[end] === ')' ? end : end + 1)) * 3.14159265359 / 180));
      }
      ele = [];
    }
    // For Cosine operation
    if (ele.includes('Cos(')) {
      const index = exp.indexOf('Cos(') + 3, end = exp.indexOf(')') === -1 ? exp.length - 1 : exp.indexOf(')');
      this.firstvalue = Math.cos(eval((exp.slice(index + 1, exp[end] === ')' ? end : end + 1))));
      if (this.isDegree === true) {
        this.firstvalue = (Math.cos(eval(exp.slice(index + 1, exp[end] === ')' ? end : end + 1)) * 3.14159265359 / 180));
      }
      ele = [];
    }
    // For Cosine inverse operation
    if (ele.includes('Cos-1(')) {
      const index = exp.indexOf('Cos-1(') + 5, end = exp.indexOf(')') === -1 ? exp.length - 1 : exp.indexOf(')');
      this.firstvalue = Math.acos(eval((exp.slice(index + 1, exp[end] === ')' ? end : end + 1))));
      if (this.isDegree === true) {
        this.firstvalue = (Math.acos(eval(exp.slice(index + 1, exp[end] === ')' ? end : end + 1)) * 3.14159265359 / 180));
      }
      ele = [];
    }
    // For Tan operation
    if (ele.includes('Tan(')) {
      const index = exp.indexOf('Tan(') + 3, end = exp.indexOf(')') === -1 ? exp.length - 1 : exp.indexOf(')');
      this.firstvalue = Math.tan(eval((exp.slice(index + 1, exp[end] === ')' ? end : end + 1))));
      if (this.isDegree === true) {
        this.firstvalue = (Math.tan(eval(exp.slice(index + 1, exp[end] === ')' ? end : end + 1)) * 3.14159265359 / 180));
      }
      ele = [];
    }
    // For Tan Inverse operation
    if (ele.includes('Tan-1(')) {
      const index = exp.indexOf('Tan-1(') + 5, end = exp.indexOf(')') === -1 ? exp.length - 1 : exp.indexOf(')');
      this.firstvalue = Math.atan(eval((exp.slice(index + 1, exp[end] === ')' ? end : end + 1))));
      if (this.isDegree === true) {
        this.firstvalue = (Math.atan(eval(exp.slice(index + 1, exp[end] === ')' ? end : end + 1)) * 3.14159265359 / 180));
      }
      ele = [];
    }
    // For Logarithm operation
    if (ele.includes('Log(')) {
      const index = exp.indexOf('Log(') + 3, end = exp.indexOf(')') === -1 ? exp.length - 1 : exp.indexOf(')');
      this.firstvalue = Math.log10(eval((exp.slice(index + 1, exp[end] === ')' ? end : end + 1))));
      ele = [];
    }
    // For Natural Logarithm operation
    if (ele.includes('ln(')) {
      const index = exp.indexOf('ln(') + 2, end = exp.indexOf(')') === -1 ? exp.length - 1 : exp.indexOf(')');
      this.firstvalue = Math.log(eval((exp.slice(index + 1, exp[end] === ')' ? end : end + 1))));
      ele = [];
    }
    // For Square root operation
    if (ele.includes('√(')) {
      const index = exp.indexOf('√(') + 1, end = exp.indexOf(')') === -1 ? exp.length - 1 : exp.indexOf(')');
      this.sqrt = Math.sqrt(eval((exp.slice(index + 1, exp[end] === ')' ? end : end + 1)))) + (Number(exp[end + 1]) ? "*" : '') + exp.slice(end + 1);
      this.firstvalue = eval(this.sqrt);
      ele = [];
    }
    // For Cube root operation
    if (ele.includes('3√(')) {
      const index = exp.indexOf('3√(') + 1, end = exp.indexOf(')') === -1 ? exp.length - 1 : exp.indexOf(')');
      this.cbrt = Math.cbrt(eval((exp.slice(index + 2, exp[end] === ')' ? end : end + 1)))) + (Number(exp[end + 1]) ? "*" : '') + exp.slice(end + 1);
      this.firstvalue = eval(this.cbrt);
      ele = [];
    }
    // For Exponent of 10 operation
    if (ele.includes('e')) {
      const index = exp.indexOf('e');
      exp = exp.slice(0, index) + '*' + '(2.71828182846)' + (Number(exp[index + 2]) ? "*" : '') + exp.slice(index + 2);
      ele.splice(ele.indexOf('e'), 1);
      this.firstvalue = eval(exp);
      ele = [];
    }
    // For Pi operation
    if (ele.includes('𝛑')) {
      const index = exp.indexOf('𝛑');
      exp = exp.slice(0, index) + '*' + '(3.14159265359)' + (Number(exp[index + 2]) ? "*" : '') + exp.slice(index + 2);
      ele.splice(ele.indexOf('𝛑'), 1);
      this.firstvalue = eval(exp);
      ele = [];
    }
    // For percentage operation
    if (ele.includes('%')) {
      const index = exp.indexOf('%');
      exp = exp.slice(0, index) + '/' + '(100)' + (Number(exp[index + 2]) ? "/" : '') + exp.slice(index + 2);
      ele.splice(ele.indexOf('%'), 1);
      this.firstvalue = eval(exp);
      ele = [];
    }
    // For Factorial operation
    if (ele.includes('!')) {
      const index = exp.indexOf('!') - 1;
      this.factorial = 1;
      for (let i = 1; i <= this.firstvalue.slice(0, -1); i++)
        this.factorial = this.factorial * i + "";
      exp = this.factorial + (Number(exp[index + 2]) ? "*" : '') + exp.slice(index + 2);
      this.firstvalue = eval(exp);
      ele = [];
    }
    // For Exponential operation
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
    // For 10power operation
    if (ele.includes('10^')) {
      const index = exp.indexOf('10^');
      const str3 = exp.slice(index + 3).split('');
      let str2 = 0;
      for (let i = 0; i < str3.length; i++) {
        if (!Number(str3[i]) && Number(str3[i]) !== 0) break;
        str2 = i;
      }
      const pow3 = Math.pow(10, Number(str3.slice(0, str2 + 1).join('')) ? Number(str3.slice(0, str2 + 1).join('')) : 0);
      exp = pow3 + str3.slice(str2 + 1).join('');
      this.firstvalue = eval(exp);
      ele = [];
    }
    // For Square of number
    if (ele.includes('^2')) {
      const index = exp.indexOf('^2');
      const pow1 = exp.slice(0, index).split('');
      let str2 = 0;
      for (let i = pow1.length - 1; i >= 0; i--) {
        if (!Number(pow1[i]) && Number(pow1[i]) !== 0) break;
        str2 = i;
      }
      const square = Math.pow(pow1.slice(str2).join(''), 2);
      exp = square + (Number(exp[index + 2]) ? "*" : '') + exp.slice(index + 2);
      this.firstvalue = eval(exp);
      ele = [];
    }
    // For Cube of Number
    if (ele.includes('^3')) {
      const index = exp.indexOf('^3');
      const pow2 = exp.slice(0, index).split('');
      let str3 = 0;
      for (let i = pow2.length - 1; i >= 0; i--) {
        if (!Number(pow2[i]) && Number(pow2[i]) !== 0) break;
        str3 = i;
      }
      const cube = Math.pow(pow2.slice(str3).join(''), 3);
      exp = cube + (Number(exp[index + 2]) ? "*" : '') + exp.slice(index + 2);
      this.firstvalue = eval(exp);
      ele = [];
    }
    switch (ele[ele.length - 1]) {
      // For sum of numbers
      case '+':
        if (this.decimal === true) {
          this.firstvalue = eval(this.screen);
        }
        else {
          this.firstvalue = eval(this.screen);
        }
        break;
      // For difference of numbers
      case '-':
        if (this.decimal === true) {
          this.firstvalue = eval(this.screen);
        }
        else {
          this.firstvalue = eval(this.screen);
        }
        break;
      // For product of numbers
      case '*':
        if (this.decimal === true) {
          this.firstvalue = eval(this.screen);
        }
        else {
          this.firstvalue = eval(this.screen);
        }
        break;
      // For division of numbers
      case '/':
        if (this.decimal === true) {
          this.firstvalue = eval(this.screen);
        }
        else {
          this.firstvalue = eval(this.screen);
        }
        break;
    }
    // For displaying result on screen
    this.screen = (this.firstvalue).toString();
  }

  // For Random number
  random() {
    this.firstvalue = Math.random();
    this.screen = this.firstvalue
  }

  // For storing result in answer button
  Answer() {
    const answer = this.screen;
    console.log(answer);
    this.screen = answer + this.firstvalue;
  }
  ngOnInit(): void {
  }
}