import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathExpressionService {

  constructor() { }

  valid(expression: string): boolean {
    try {
      return typeof this.evaluation(expression) === 'number';
    } catch (e) {
      return false;
    }
  }

  evaluate(expression: string): number {
    return this.evaluation(expression);
  }

  private evaluation(expression: string): any {
    return eval(this.parseTrigonometricExpression(expression));
  }

  private parseTrigonometricExpression(expression: string): string {
    return expression.replace('sin', 'Math.sin')
      .replace('cos', 'Math.cos')
      .replace('tan', 'Math.tan');
  }
}
