import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams } from '../../layout/field-template';

export interface NgffInputWeekParams extends NgffFieldParams {
  min?: string;
  max?: string;
  step?: number;
}

@Component({
  selector: 'ngff-input-week',
  imports: [Field],
  templateUrl: './input-week.html',
})
export class NgffInputWeek {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputWeekParams>({});
}
