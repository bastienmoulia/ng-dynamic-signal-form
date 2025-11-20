import { Component, input } from '@angular/core';
import { NgffFieldTemplate } from '../layout/field-template';
import { NgffField, NgffFieldParamsTyped } from './field';

export enum NgffWrapperType {
  FormGroup = 'form-group',
  FieldGroup = 'field-group',
  InputGroup = 'input-group',
}

export interface NgffWrapperParams {
  type: NgffWrapperType;
  label?: string;
  className?: string;
  childrens: (NgffFieldParamsTyped | NgffWrapperParams)[];
  [key: string]: any;
}

export type NgffFormParams = (NgffFieldParamsTyped | NgffWrapperParams)[];

@Component({
  selector: 'ngff-fields',
  imports: [NgffField, NgffFieldTemplate],
  templateUrl: './fields.html',
})
export class NgffFields {
  params = input.required<NgffFormParams>();
  form = input.required<any>();
}
