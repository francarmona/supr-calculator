import {Component, OnInit} from '@angular/core';
import {MathExpressionService} from './core/math-expression.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'calculator';

  constructor(private mathExpression: MathExpressionService) {}

  ngOnInit() {
    console.log(this.mathExpression.valid('sin(30) + cos(20)'));

    console.log(this.mathExpression.evaluate('+2'));
  }
}
