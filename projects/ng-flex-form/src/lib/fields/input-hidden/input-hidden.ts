import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams, NgffFieldTemplate } from '../../layout/field-template';

export interface NgffInputHiddenParams extends NgffFieldParams {}

@Component({
  selector: 'ngff-input-hidden',
  imports: [Field, NgffFieldTemplate],
  templateUrl: './input-hidden.html',
})
export class NgffInputHidden {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputHiddenParams>({});
}
