import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams } from '../../layout/field-template';

export interface NgffInputColorParams extends NgffFieldParams {}

@Component({
  selector: 'ngff-input-color',
  imports: [Field],
  templateUrl: './input-color.html',
})
export class NgffInputColor {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputColorParams>({});
}
