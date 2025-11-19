import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams, NgffFieldTemplate } from '../../layout/field-template';

export interface NgffInputFileParams extends NgffFieldParams {
  accept?: string;
  multiple?: boolean;
}

@Component({
  selector: 'ngff-input-file',
  imports: [Field, NgffFieldTemplate],
  templateUrl: './input-file.html',
})
export class NgffInputFile {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputFileParams>({});
}
