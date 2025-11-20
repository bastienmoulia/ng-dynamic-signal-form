import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams } from '../../layout/field-template';

export interface NgffInputEmailParams extends NgffFieldParams {
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  autocomplete?: string;
  size?: number;
  multiple?: boolean;
}

@Component({
  selector: 'ngff-input-email',
  imports: [Field],
  templateUrl: './input-email.html',
})
export class NgffInputEmail {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputEmailParams>({});
}
