import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffInputRadio } from './input-radio';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgffInputRadio', () => {
  let component: NgffInputRadio;
  let fixture: ComponentFixture<NgffInputRadio>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgffInputRadio, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgffInputRadio],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffInputRadio);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
