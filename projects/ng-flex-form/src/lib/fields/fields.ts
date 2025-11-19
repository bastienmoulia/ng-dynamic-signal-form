import { Component, computed, input } from '@angular/core';
import { NgffFieldParams } from '../layout/field-template';
import { NgffInputText } from './input-text/input-text';
import { NgffInputEmail } from './input-email/input-email';
import { NgffInputDate } from './input-date/input-date';
import { NgffInputPassword } from './input-password/input-password';
import { NgffInputTime } from './input-time/input-time';
import { NgffInputNumber } from './input-number/input-number';
import { NgffInputTel } from './input-tel/input-tel';
import { NgffInputUrl } from './input-url/input-url';
import { NgffInputSearch } from './input-search/input-search';
import { NgffInputColor } from './input-color/input-color';
import { NgffInputCheckbox } from './input-checkbox/input-checkbox';
import { NgffInputRadio } from './input-radio/input-radio';
import { NgffInputRange } from './input-range/input-range';
import { NgffInputFile } from './input-file/input-file';
import { NgffInputHidden } from './input-hidden/input-hidden';
import { NgffInputDatetimeLocal } from './input-datetime-local/input-datetime-local';
import { NgffInputMonth } from './input-month/input-month';
import { NgffInputWeek } from './input-week/input-week';
import { NgffTextarea } from './textarea/textarea';
import { NgffSelect } from './select/select';

export enum NgffFieldType {
  InputCheckbox = 'input-checkbox',
  InputColor = 'input-color',
  InputDate = 'input-date',
  InputDatetimeLocal = 'input-datetime-local',
  InputEmail = 'input-email',
  InputFile = 'input-file',
  InputHidden = 'input-hidden',
  InputMonth = 'input-month',
  InputNumber = 'input-number',
  InputPassword = 'input-password',
  InputRadio = 'input-radio',
  InputRange = 'input-range',
  InputSearch = 'input-search',
  InputTel = 'input-tel',
  InputText = 'input-text',
  InputTime = 'input-time',
  InputUrl = 'input-url',
  InputWeek = 'input-week',
  Select = 'select',
  Textarea = 'textarea',
}

export enum NgffWrapperType {
  FormGroup = 'form-group',
  FieldGroup = 'field-group',
  InputGroup = 'input-group',
}

export interface NgffFieldParamsTyped extends NgffFieldParams {
  type: NgffFieldType | NgffWrapperType;
  childrens?: NgffFormParams[];
}

export interface NgffFormParams {
  [key: string]: NgffFieldParamsTyped;
}

@Component({
  selector: 'ngff-fields',
  imports: [
    NgffInputText,
    NgffInputEmail,
    NgffInputDate,
    NgffInputPassword,
    NgffInputTime,
    NgffInputNumber,
    NgffInputTel,
    NgffInputUrl,
    NgffInputSearch,
    NgffInputColor,
    NgffInputCheckbox,
    NgffInputRadio,
    NgffInputRange,
    NgffInputFile,
    NgffInputHidden,
    NgffInputDatetimeLocal,
    NgffInputMonth,
    NgffInputWeek,
    NgffSelect,
    NgffTextarea,
  ],
  templateUrl: './fields.html',
})
export class NgffFields {
  params = input.required<{ [key: string]: NgffFieldParamsTyped }>();
  form = input.required<any>();

  fieldsKeys = computed(() => {
    return Array.from((this.form()().structure.childrenMap() as Map<string, any>).keys());
  });
}
