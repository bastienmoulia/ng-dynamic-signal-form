import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffFieldErrors } from './field-errors';
import { signal } from '@angular/core';

describe('NgffFieldErrors', () => {
  let component: NgffFieldErrors;
  let fixture: ComponentFixture<NgffFieldErrors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgffFieldErrors],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffFieldErrors);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    const mockField = () => ({
      value: () => '',
      errors: () => [],
      invalid: () => false,
      touched: () => false,
      dirty: () => false,
    });
    
    fixture.componentRef.setInput('field', mockField);
    fixture.detectChanges();
    
    expect(component).toBeTruthy();
  });

  it('should show errors when field is touched and invalid', () => {
    const mockField = () => ({
      value: () => '',
      errors: () => [{ message: 'Field is required' }],
      invalid: () => true,
      touched: () => true,
      dirty: () => false,
    });
    
    fixture.componentRef.setInput('field', mockField);
    fixture.detectChanges();
    
    expect(component.shouldShowErrors()).toBe(true);
  });

  it('should not show errors when field is not touched', () => {
    const mockField = () => ({
      value: () => '',
      errors: () => [{ message: 'Field is required' }],
      invalid: () => true,
      touched: () => false,
      dirty: () => false,
    });
    
    fixture.componentRef.setInput('field', mockField);
    fixture.detectChanges();
    
    expect(component.shouldShowErrors()).toBe(false);
  });
});
