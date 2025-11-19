import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams, NgffFieldTemplate } from '../../layout/field-template';

export interface NgffInputUrlParams extends NgffFieldParams {
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  autocomplete?: string;
  size?: number;
}

@Component({
  selector: 'ngff-input-url',
  imports: [Field, NgffFieldTemplate],
  templateUrl: './input-url.html',
})
export class NgffInputUrl {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputUrlParams>({});
}
