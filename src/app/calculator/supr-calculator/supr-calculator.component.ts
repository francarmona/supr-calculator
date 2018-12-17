import { Component, OnInit } from '@angular/core';
import {MathExpressionService} from '../../core/math-expression.service';
import {Button} from '../button';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-supr-calculator',
  templateUrl: './supr-calculator.component.html',
  styleUrls: ['./supr-calculator.component.scss']
})
export class SuprCalculatorComponent implements OnInit {

  errorMessage: string;
  screenValue = '';
  operands: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  operators: string[] = ['+', '-', '*', '/', 'sin', 'cos', 'tan'];
  rand: Observable;

  constructor(private mathExpression: MathExpressionService) { }

  ngOnInit() {
    this.rand = of(2345);
  }

  onSelect(button: Button) {
    console.log(button);
    this.screenValue += `${button.value}`;
  }

  clear() {
    this.screenValue = '';
  }

}
