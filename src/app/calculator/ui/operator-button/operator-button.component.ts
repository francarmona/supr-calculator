import { Component } from '@angular/core';
import {BaseButtonComponent} from '../base-button/base-button.component';
import {ButtonType} from '../../button-type.enum';

@Component({
  selector: 'app-operator-button',
  templateUrl: './operator-button.component.html',
  styleUrls: ['./operator-button.component.scss']
})
export class OperatorButtonComponent extends BaseButtonComponent {
  type: ButtonType = ButtonType.Operator;
}
