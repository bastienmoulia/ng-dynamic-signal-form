import { Component, input } from '@angular/core';
import { NgffFieldParams, NgffFieldTemplate } from '../../layout/field-template';
import { Field, FieldState } from '@angular/forms/signals';

export interface NgffInputPasswordParams extends NgffFieldParams {
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  autocomplete?: string;
  size?: number;
}

@Component({
  selector: 'ngff-input-password',
  imports: [Field, NgffFieldTemplate],
  templateUrl: './input-password.html',
})
export class NgffInputPassword {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputPasswordParams>({});
}
