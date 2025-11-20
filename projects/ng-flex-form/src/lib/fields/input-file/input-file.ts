import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgffFieldParams } from '../../layout/field-template';

export interface NgffInputFileParams extends NgffFieldParams {
  accept?: string;
  multiple?: boolean;
}

@Component({
  selector: 'ngff-input-file',
  imports: [Field],
  templateUrl: './input-file.html',
})
export class NgffInputFile {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgffInputFileParams>({});
}
