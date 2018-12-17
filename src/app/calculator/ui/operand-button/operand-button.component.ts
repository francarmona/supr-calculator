import { Component, OnInit } from '@angular/core';
import {BaseButtonComponent} from '../base-button/base-button.component';

@Component({
  selector: 'app-operand-button',
  templateUrl: './operand-button.component.html',
  styleUrls: ['./operand-button.component.scss']
})
export class OperandButtonComponent extends BaseButtonComponent {}
