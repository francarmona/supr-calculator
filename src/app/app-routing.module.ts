import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalculatorComponent} from './calculator/calculator/calculator.component';
import {SuprCalculatorComponent} from './calculator/supr-calculator/supr-calculator.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'supr-calculator', component: SuprCalculatorComponent },
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
