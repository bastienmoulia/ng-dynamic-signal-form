import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams } from '../../layout/field-template';

export interface NgffInputSearchParams extends NgffFieldParams {
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  autocomplete?: string;
  size?: number;
}

@Component({
  selector: 'ngff-input-search',
  imports: [Field],
  templateUrl: './input-search.html',
})
export class NgffInputSearch {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputSearchParams>({});
}
