import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams } from '../../layout/field-template';

export interface NgffInputTextParams extends NgffFieldParams {
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  autocomplete?: string;
  size?: number;
}

@Component({
  selector: 'ngff-input-text',
  imports: [Field],
  templateUrl: './input-text.html',
})
export class NgffInputText {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputTextParams>({});
}
