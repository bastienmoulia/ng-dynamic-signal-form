import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffInputDatetimeLocal } from './input-datetime-local';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgffInputDatetimeLocal', () => {
  let component: NgffInputDatetimeLocal;
  let fixture: ComponentFixture<NgffInputDatetimeLocal>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgffInputDatetimeLocal, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgffInputDatetimeLocal],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffInputDatetimeLocal);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
