import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, input, TemplateRef } from '@angular/core';
import { FieldState } from '@angular/forms/signals';

export interface NgffFieldParams {
  id?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  className?: string;
  [key: string]: any;
}

@Component({
  selector: 'ngff-field-template',
  imports: [NgTemplateOutlet],
  template: `
    @if(field() !== undefined && field()() !== undefined) {
    <label>
      @if (params().label) {
      {{ params().label }}
      {{ field()().required?.() ? '*' : '' }}
      } @if (contentTemplate()) {
      <ng-container *ngTemplateOutlet="contentTemplate()" />
      }
    </label>
    @if (field()().touched() && field()().invalid()) {
    <ul>
      @for (error of field()().errors(); track $index) {
      <li>{{ error.message }}</li>
      }
    </ul>
    } }
  `,
})
export class NgffFieldTemplate {
  field = input.required<() => FieldState<any, string | number>>();
  params = input.required<NgffFieldParams>({});

  contentTemplate = contentChild(TemplateRef);
}
