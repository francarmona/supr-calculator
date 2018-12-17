import {ButtonType} from './button-type.enum';

export interface Button {
  type: ButtonType;
  value: any;
  label: string;
}
