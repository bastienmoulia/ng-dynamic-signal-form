import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffFields, NgffFieldType } from './fields';

function mockForm() {
  // form() returns inner, double call pattern simulated in template by passing just a map accessor.
  const structure = {
    childrenMap: () =>
      new Map<string, any>([
        ['email', mockField()],
        ['password', mockField()],
      ]),
  };
  return () => ({ structure });
}

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
  });
}

describe('NgffFields', () => {
  let component: NgffFields;
  let fixture: ComponentFixture<NgffFields>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgffFields],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffFields);
    fixture.componentRef.setInput('form', mockForm());
    fixture.componentRef.setInput('params', {
      email: { type: NgffFieldType.InputEmail, label: 'Email' },
      password: { type: NgffFieldType.InputPassword, label: 'Password' },
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
