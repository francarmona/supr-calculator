import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonType} from '../../button-type.enum';
import {Button} from '../../button';

@Component({
  selector: 'app-base-button',
  template: ''
})
export class BaseButtonComponent {

  @Input() value: any;
  @Output() select = new EventEmitter<Button>();

  type: ButtonType = ButtonType.Operand;
  constructor() { }

  selectButton() {
    this.select.emit({value: this.value, type: this.type});
  }

}
