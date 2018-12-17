import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [CalculatorComponent],
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
