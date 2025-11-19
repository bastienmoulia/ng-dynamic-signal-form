import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffInputColor } from './input-color';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgffInputColor', () => {
  let component: NgffInputColor;
  let fixture: ComponentFixture<NgffInputColor>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgffInputColor, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgffInputColor],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffInputColor);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
