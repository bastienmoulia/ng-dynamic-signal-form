import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams, NgffFieldTemplate } from '../../layout/field-template';

export interface NgffInputColorParams extends NgffFieldParams {}

@Component({
  selector: 'ngff-input-color',
  imports: [Field, NgffFieldTemplate],
  templateUrl: './input-color.html',
})
export class NgffInputColor {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputColorParams>({});
}
