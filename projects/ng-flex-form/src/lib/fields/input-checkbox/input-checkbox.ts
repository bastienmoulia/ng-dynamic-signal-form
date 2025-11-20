import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams } from '../../layout/field-template';

export interface NgffInputCheckboxParams extends NgffFieldParams {
  value?: string;
}

@Component({
  selector: 'ngff-input-checkbox',
  imports: [Field],
  templateUrl: './input-checkbox.html',
})
export class NgffInputCheckbox {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputCheckboxParams>({});
}
