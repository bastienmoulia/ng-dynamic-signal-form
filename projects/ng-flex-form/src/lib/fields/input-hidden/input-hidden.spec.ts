import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffInputHidden } from './input-hidden';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgffInputHidden', () => {
  let component: NgffInputHidden;
  let fixture: ComponentFixture<NgffInputHidden>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgffInputHidden, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgffInputHidden],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffInputHidden);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
