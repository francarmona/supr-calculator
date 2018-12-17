import { Component, OnInit } from '@angular/core';
import {MathExpressionService} from '../../core/math-expression.service';
import {Button} from '../button';
import {Observable} from 'rxjs';
import {UtilsService} from '../../core/utils.service';

@Component({
  selector: 'app-supr-calculator',
  templateUrl: './supr-calculator.component.html',
  styleUrls: ['./supr-calculator.component.scss']
})
export class SuprCalculatorComponent implements OnInit {

  validExpression: boolean;
  screenValue: any = '';
  operands: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  operators: string[] = ['+', '-', '*', '/', 'sin', 'cos', 'tan'];
  rand: Observable;
  private previousOperator;

  constructor(private mathExpression: MathExpressionService, private utils: UtilsService) { }

  ngOnInit() {
    this.rand = this.utils.getRandom();
    this.validExpression = true;
  }

  onSelect(button: Button) {
    if (this.previousOperator === 'sin' ||
      this.previousOperator === 'cos' ||
      this.previousOperator === 'tan') {
      this.screenValue += `(${button.value})`;
    } else {
      this.screenValue += `${button.value}`;
    }
    this.validExpression = this.mathExpression.valid(this.screenValue);
    this.previousOperator = button.value;
  }

  generateRandom() {
    this.rand = this.utils.getRandom();
  }

  result() {
    this.screenValue = this.mathExpression.evaluate(this.screenValue);
  }

  clear() {
    this.screenValue = '';
    this.previousOperator = undefined;
  }

}
