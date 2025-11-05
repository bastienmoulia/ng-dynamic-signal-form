import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDynamicSignalForm } from './ng-dynamic-signal-form';

describe('NgDynamicSignalForm', () => {
  let component: NgDynamicSignalForm;
  let fixture: ComponentFixture<NgDynamicSignalForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgDynamicSignalForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgDynamicSignalForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
