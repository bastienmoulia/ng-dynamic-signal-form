import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams } from '../../layout/field-template';

export interface NgffInputRadioParams extends NgffFieldParams {
  name?: string;
  value?: string;
}

@Component({
  selector: 'ngff-input-radio',
  imports: [Field],
  templateUrl: './input-radio.html',
})
export class NgffInputRadio {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputRadioParams>({});
}
