import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams } from '../../layout/field-template';

export interface NgffInputTimeParams extends NgffFieldParams {
  min?: string;
  max?: string;
  step?: number;
}

@Component({
  selector: 'ngff-input-time',
  imports: [Field],
  templateUrl: './input-time.html',
})
export class NgffInputTime {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputTimeParams>({});
}
