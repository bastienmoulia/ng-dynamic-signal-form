import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffInputRange } from './input-range';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => 0 },
  });
}

describe('NgffInputRange', () => {
  let component: NgffInputRange;
  let fixture: ComponentFixture<NgffInputRange>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgffInputRange, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgffInputRange],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffInputRange);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
