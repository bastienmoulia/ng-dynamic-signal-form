import { Component, signal } from '@angular/core';
import { email, form, required } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { NgdsfFields, NgdsfFieldType, NgdsfFormParams } from 'ng-dynamic-signal-form';

@Component({
  selector: 'app-getting-started',
  imports: [RouterLink, NgdsfFields],
  templateUrl: './getting-started.html',
  styleUrl: './getting-started.css',
})
export class GettingStarted {
  model = signal({
    name: '',
    email: '',
  });

  formParams: NgdsfFormParams = {
    name: { type: NgdsfFieldType.InputText, label: 'Name', placeholder: 'Enter your name' },
    email: { type: NgdsfFieldType.InputEmail, label: 'Email', placeholder: 'Enter your email' },
  };

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
