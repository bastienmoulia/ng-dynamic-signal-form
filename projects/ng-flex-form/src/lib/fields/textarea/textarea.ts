import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams, NgffFieldTemplate } from '../../layout/field-template';

export interface NgffTextareaParams extends NgffFieldParams {
  rows?: number;
  cols?: number;
  minlength?: number;
  maxlength?: number;
  wrap?: 'soft' | 'hard' | 'off';
}

@Component({
  selector: 'ngff-textarea',
  imports: [Field, NgffFieldTemplate],
  templateUrl: './textarea.html',
})
export class NgffTextarea {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffTextareaParams>({});
}
