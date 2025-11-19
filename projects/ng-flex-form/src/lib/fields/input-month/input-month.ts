import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams, NgffFieldTemplate } from '../../layout/field-template';

export interface NgffInputMonthParams extends NgffFieldParams {
  min?: string;
  max?: string;
  step?: number;
}

@Component({
  selector: 'ngff-input-month',
  imports: [Field, NgffFieldTemplate],
  templateUrl: './input-month.html',
})
export class NgffInputMonth {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputMonthParams>({});
}
