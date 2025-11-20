import {
  Component,
  input,
  ViewContainerRef,
  viewChild,
  effect,
  Type,
  inputBinding,
} from '@angular/core';
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
import { NgffFieldParams } from '../layout/field-template';
import { NgffWrapperType } from './fields';
import { FieldState } from '@angular/forms/signals';

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

export interface NgffFieldParamsTyped extends NgffFieldParams {
  key: string;
  type: NgffFieldType;
  wrappers?: NgffWrapperType[];
}

const FIELD_TYPE_MAP: Record<NgffFieldType, Type<any>> = {
  [NgffFieldType.InputCheckbox]: NgffInputCheckbox,
  [NgffFieldType.InputColor]: NgffInputColor,
  [NgffFieldType.InputDate]: NgffInputDate,
  [NgffFieldType.InputDatetimeLocal]: NgffInputDatetimeLocal,
  [NgffFieldType.InputEmail]: NgffInputEmail,
  [NgffFieldType.InputFile]: NgffInputFile,
  [NgffFieldType.InputHidden]: NgffInputHidden,
  [NgffFieldType.InputMonth]: NgffInputMonth,
  [NgffFieldType.InputNumber]: NgffInputNumber,
  [NgffFieldType.InputPassword]: NgffInputPassword,
  [NgffFieldType.InputRadio]: NgffInputRadio,
  [NgffFieldType.InputRange]: NgffInputRange,
  [NgffFieldType.InputSearch]: NgffInputSearch,
  [NgffFieldType.InputTel]: NgffInputTel,
  [NgffFieldType.InputText]: NgffInputText,
  [NgffFieldType.InputTime]: NgffInputTime,
  [NgffFieldType.InputUrl]: NgffInputUrl,
  [NgffFieldType.InputWeek]: NgffInputWeek,
  [NgffFieldType.Select]: NgffSelect,
  [NgffFieldType.Textarea]: NgffTextarea,
};

@Component({
  selector: 'ngff-field',
  template: '<ng-container #container />',
})
export class NgffField {
  params = input.required<NgffFieldParamsTyped>();
  field = input.required<() => FieldState<any, string | number>>();

  private container = viewChild.required('container', { read: ViewContainerRef });

  constructor() {
    effect(() => {
      const containerRef = this.container();
      const fieldType = this.params().type;
      const componentType = FIELD_TYPE_MAP[fieldType];

      // Clear previous component
      containerRef.clear();

      if (componentType) {
        // Create component with bindings
        containerRef.createComponent(componentType, {
          bindings: [inputBinding('field', this.field), inputBinding('params', this.params)],
        });
      }
    });
  }
}
