import { Component, input } from '@angular/core';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../field-template/field-template';
import { Field, FieldState } from '@angular/forms/signals';

interface NgdsfInputPasswordParams extends NgdsfFieldParams {
  // Additional properties specific to the password input can be added here
}

@Component({
  selector: 'ngdsf-input-password',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-password.html',
})
export class NgdsfInputPassword {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfInputPasswordParams>({});
}
