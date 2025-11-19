import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffFormErrors } from './form-errors';
import { signal } from '@angular/core';

describe('NgffFormErrors', () => {
  let component: NgffFormErrors;
  let fixture: ComponentFixture<NgffFormErrors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgffFormErrors],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffFormErrors);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    const mockForm = signal(() => ({
      structure: {
        childrenMap: () => new Map(),
      },
    }));
    
    fixture.componentRef.setInput('form', mockForm);
    fixture.detectChanges();
    
    expect(component).toBeTruthy();
  });

  it('should return empty errors when form has no invalid fields', () => {
    const childrenMap = new Map();
    
    const mockForm = signal(() => ({
      structure: {
        childrenMap: () => childrenMap,
      },
    }));
    
    fixture.componentRef.setInput('form', mockForm);
    fixture.detectChanges();
    
    const errors = component.allErrors();
    expect(errors.length).toBe(0);
    expect(component.hasErrors()).toBe(false);
  });
});
