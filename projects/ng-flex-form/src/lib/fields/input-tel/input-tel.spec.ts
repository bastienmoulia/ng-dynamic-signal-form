import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffInputTel } from './input-tel';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgffInputTel', () => {
  let component: NgffInputTel;
  let fixture: ComponentFixture<NgffInputTel>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgffInputTel, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgffInputTel],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffInputTel);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
