import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams } from '../../layout/field-template';

export interface NgffSelectOption {
  type?: 'option';
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface NgffSelectOptgroup {
  type: 'optgroup';
  label: string;
  disabled?: boolean;
  options: NgffSelectOption[];
}

export interface NgffSelectHr {
  type: 'hr';
}

export type NgffSelectItem = NgffSelectOption | NgffSelectOptgroup | NgffSelectHr;

export interface NgffSelectParams extends NgffFieldParams {
  options?: NgffSelectItem[];
  multiple?: boolean;
  size?: number;
}

@Component({
  selector: 'ngff-select',
  imports: [Field],
  templateUrl: './select.html',
})
export class NgffSelect {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffSelectParams>({});
}
