import { Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { NgffInputColor, NgffInputFile, NgffInputHidden } from 'ng-flex-form';

@Component({
  selector: 'app-other-inputs',
  imports: [NgffInputColor, NgffInputFile, NgffInputHidden],
  templateUrl: './other-inputs.html',
  styleUrl: './other-inputs.css',
})
export class OtherInputs {
  model = signal({
    color: '#1976d2',
    file: null as any,
    hiddenValue: 'secret-data',
  });

  demoForm = form(this.model);

  colorField = () => this.demoForm.color();
  fileField = () => this.demoForm.file();
  hiddenValueField = () => this.demoForm.hiddenValue();
}
