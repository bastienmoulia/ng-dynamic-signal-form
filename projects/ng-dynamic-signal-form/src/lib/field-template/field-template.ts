import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, input, TemplateRef } from '@angular/core';

export interface FieldParams {
  id?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  [key: string]: any;
}

@Component({
  selector: 'ngdsf-field-template',
  imports: [NgTemplateOutlet],
  templateUrl: './field-template.html',
})
export class FieldTemplate {
  field = input.required<any>();
  params = input.required<FieldParams>({});

  contentTemplate = contentChild(TemplateRef);
}
