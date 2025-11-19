import { Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import {
  NgffInputDate,
  NgffInputTime,
  NgffInputDatetimeLocal,
  NgffInputMonth,
  NgffInputWeek,
} from 'ng-flex-form';

@Component({
  selector: 'app-date-time-inputs',
  imports: [
    NgffInputDate,
    NgffInputTime,
    NgffInputDatetimeLocal,
    NgffInputMonth,
    NgffInputWeek,
  ],
  templateUrl: './date-time-inputs.html',
  styleUrl: './date-time-inputs.css',
})
export class DateTimeInputs {
  model = signal({
    date: '',
    time: '',
    datetime: '',
    month: '',
    week: '',
  });

  demoForm = form(this.model);

  dateField = () => this.demoForm.date();
  timeField = () => this.demoForm.time();
  datetimeField = () => this.demoForm.datetime();
  monthField = () => this.demoForm.month();
  weekField = () => this.demoForm.week();
}
