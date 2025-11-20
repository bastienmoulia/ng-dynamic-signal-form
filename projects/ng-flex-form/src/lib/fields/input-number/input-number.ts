import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams } from '../../layout/field-template';

export interface NgffInputNumberParams extends NgffFieldParams {
  min?: number;
  max?: number;
  step?: number;
  autocomplete?: string;
}

@Component({
  selector: 'ngff-input-number',
  imports: [Field],
  templateUrl: './input-number.html',
})
export class NgffInputNumber {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputNumberParams>({});
}
