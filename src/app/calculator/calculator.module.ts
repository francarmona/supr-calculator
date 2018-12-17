import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormsModule} from '@angular/forms';
import { BaseButtonComponent } from './ui/base-button/base-button.component';
import { OperandButtonComponent } from './ui/operand-button/operand-button.component';
import { OperatorButtonComponent } from './ui/operator-button/operator-button.component';
import { SuprCalculatorComponent } from './supr-calculator/supr-calculator.component';

@NgModule({
  declarations: [CalculatorComponent, BaseButtonComponent, OperandButtonComponent, OperatorButtonComponent, SuprCalculatorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CalculatorComponent,
    FormsModule
  ]
})
export class CalculatorModule { }
