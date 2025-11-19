import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffInputMonth } from './input-month';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgffInputMonth', () => {
  let component: NgffInputMonth;
  let fixture: ComponentFixture<NgffInputMonth>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgffInputMonth, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgffInputMonth],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffInputMonth);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
