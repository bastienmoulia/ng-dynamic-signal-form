import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffInputDate } from './input-date';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgffInputDate', () => {
  let component: NgffInputDate;
  let fixture: ComponentFixture<NgffInputDate>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgffInputDate, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgffInputDate],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffInputDate);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
