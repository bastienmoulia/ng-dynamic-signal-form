import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffInputCheckbox } from './input-checkbox';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => false },
  });
}

describe('NgffInputCheckbox', () => {
  let component: NgffInputCheckbox;
  let fixture: ComponentFixture<NgffInputCheckbox>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgffInputCheckbox, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgffInputCheckbox],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffInputCheckbox);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
