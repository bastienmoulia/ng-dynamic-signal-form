import { Component, computed, effect, input } from '@angular/core';
import { FieldParams } from '../field-template/field-template';
import { FieldTree } from '@angular/forms/signals';
import { InputText } from './input-text/input-text';
import { InputEmail } from './input-email/input-email';
import { InputDate } from './input-date/input-date';
import { InputPassword } from './input-password/input-password';
import { InputTime } from './input-time/input-time';
import { Textarea } from './textarea/textarea';

export enum FieldType {
  InputDate = 'input-date',
  InputEmail = 'input-email',
  InputPassword = 'input-password',
  InputTime = 'input-time',
  InputText = 'input-text',
  Textarea = 'textarea',
  // Additional field types can be added here
}

export interface FieldParamsTyped extends FieldParams {
  type: FieldType;
}

export interface FormParams {
  [key: string]: FieldParamsTyped;
}

@Component({
  selector: 'app-fields',
  imports: [InputText, InputEmail, InputDate, InputPassword, InputTime, Textarea],
  templateUrl: './fields.html',
})
export class Fields {
  params = input.required<{ [key: string]: FieldParamsTyped }>();
  form = input.required<any>();

  fieldsKeys = computed(() => {
    return Array.from((this.form()().structure.childrenMap() as Map<string, any>).keys());
  });
}
