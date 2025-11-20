import { Component, signal } from '@angular/core';
import { email, form, required } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { NgffFields, NgffFieldType, NgffFormParams, NgffWrapperType } from 'ng-flex-form';

@Component({
  selector: 'app-getting-started',
  imports: [RouterLink, NgffFields],
  templateUrl: './getting-started.html',
  styleUrl: './getting-started.css',
})
export class GettingStarted {
  model = signal({
    name: '',
    email: '',
  });

  formParams: NgffFormParams = [
    { key: 'name', type: NgffFieldType.InputText, label: 'Name', placeholder: 'Enter your name' },
    {
      key: 'email',
      type: NgffFieldType.InputEmail,
      label: 'Email',
      placeholder: 'Enter your email',
      wrappers: [NgffWrapperType.FieldGroup],
    },
  ];

  myForm = form(this.model, (p) => {
    required(p.name, { message: 'Name is required' });
    required(p.email, { message: 'Email is required' });
    email(p.email, { message: 'Enter a valid email address' });
  });

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted', this.model());
  }
}
