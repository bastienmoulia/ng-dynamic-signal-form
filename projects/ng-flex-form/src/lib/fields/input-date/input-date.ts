import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams } from '../../layout/field-template';

export interface NgffInputDateParams extends NgffFieldParams {
  min?: string;
  max?: string;
  step?: number;
}

@Component({
  selector: 'ngff-input-date',
  imports: [Field],
  templateUrl: './input-date.html',
})
export class NgffInputDate {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputDateParams>({});
}
