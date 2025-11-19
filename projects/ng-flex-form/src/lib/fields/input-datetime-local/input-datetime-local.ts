import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams, NgffFieldTemplate } from '../../layout/field-template';

export interface NgffInputDatetimeLocalParams extends NgffFieldParams {
  min?: string;
  max?: string;
  step?: number;
}

@Component({
  selector: 'ngff-input-datetime-local',
  imports: [Field, NgffFieldTemplate],
  templateUrl: './input-datetime-local.html',
})
export class NgffInputDatetimeLocal {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputDatetimeLocalParams>({});
}
