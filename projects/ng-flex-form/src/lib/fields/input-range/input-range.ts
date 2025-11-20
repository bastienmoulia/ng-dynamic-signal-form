import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams } from '../../layout/field-template';

export interface NgffInputRangeParams extends NgffFieldParams {
  min?: number;
  max?: number;
  step?: number;
}

@Component({
  selector: 'ngff-input-range',
  imports: [Field],
  templateUrl: './input-range.html',
})
export class NgffInputRange {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputRangeParams>({});
}
