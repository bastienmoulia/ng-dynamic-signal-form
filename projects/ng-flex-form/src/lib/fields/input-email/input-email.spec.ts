import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffInputEmail } from './input-email';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgffInputEmail', () => {
  let component: NgffInputEmail;
  let fixture: ComponentFixture<NgffInputEmail>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgffInputEmail, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgffInputEmail],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffInputEmail);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
