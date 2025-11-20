import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams } from '../../layout/field-template';

export interface NgffInputTelParams extends NgffFieldParams {
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  autocomplete?: string;
  size?: number;
}

@Component({
  selector: 'ngff-input-tel',
  imports: [Field],
  templateUrl: './input-tel.html',
})
export class NgffInputTel {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputTelParams>({});
}
