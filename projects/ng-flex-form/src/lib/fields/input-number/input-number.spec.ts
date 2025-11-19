import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffInputNumber } from './input-number';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => 0 },
  });
}

describe('NgffInputNumber', () => {
  let component: NgffInputNumber;
  let fixture: ComponentFixture<NgffInputNumber>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgffInputNumber, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgffInputNumber],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffInputNumber);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
