import { Component } from '@angular/core';
import {MathExpressionService} from '../../core/math-expression.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  errorMessage: string;
  expressions: {expression, result}[] = [];

  constructor(private mathExpression: MathExpressionService) { }

  onKey(value: string) {
    if (this.mathExpression.valid(value)) {
      this.errorMessage = '';
      this.pushLatest(value);
    } else {
      this.errorMessage = 'No valid expression';
    }
  }

  private pushLatest(value) {
    if (this.expressions.length === 5) {
      this.expressions.unshift({
        expression: value,
        result: this.mathExpression.evaluate(value)
      });
      this.expressions = this.expressions.slice(0, 5);
    } else {
      this.expressions.push({
        expression: value,
        result: this.mathExpression.evaluate(value)
      });
    }
  }

}
