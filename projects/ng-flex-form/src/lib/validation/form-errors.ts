import { Component, computed, input } from '@angular/core';

export interface NgffFormErrorsParams {
  title?: string;
  className?: string;
}

@Component({
  selector: 'ngff-form-errors',
  template: `
    @if (hasErrors()) {
    <ul [class]="params().className">
      @for (error of allErrors(); track $index) {
      <li>{{ error.field }}: {{ error.message }}</li>
      }
    </ul>
    }
  `,
})
export class NgffFormErrors {
  form = input.required<any>();
  params = input<NgffFormErrorsParams>({});

  allErrors = computed(() => {
    const formAccessor = this.form();
    const errors: Array<{ field: string; message: string }> = [];

    if (formAccessor && formAccessor().structure && formAccessor().structure.childrenMap) {
      const childrenMap = formAccessor().structure.childrenMap();

      for (const [fieldName] of childrenMap) {
        const fieldAccessor = formAccessor[fieldName];
        if (fieldAccessor) {
          const state = fieldAccessor();
          if (state && state.invalid && state.invalid() && state.touched && state.touched()) {
            const fieldErrors = state.errors ? state.errors() : [];
            for (const error of fieldErrors) {
              errors.push({
                field: fieldName,
                message: error.message || 'Invalid field',
              });
            }
          }
        }
      }
    }

    return errors;
  });

  hasErrors = computed(() => this.allErrors().length > 0);
}
