import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffInputText } from './input-text';

function mockField() {
  // Provide minimal shape used by template without invoking Angular control directive
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    // minimal state shape to satisfy potential access
    state: { value: () => '' },
  });
}

describe('NgffInputText', () => {
  let component: NgffInputText;
  let fixture: ComponentFixture<NgffInputText>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgffInputText, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgffInputText],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffInputText);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
