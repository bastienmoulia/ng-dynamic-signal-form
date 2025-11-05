import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../field-template/field-template';

interface NgdsfInputTextParams extends NgdsfFieldParams {
  // Additional properties specific to the text input can be added here
}

@Component({
  selector: 'ngdsf-input-text',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-text.html',
})
export class NgdsfInputText {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfInputTextParams>({});
}
