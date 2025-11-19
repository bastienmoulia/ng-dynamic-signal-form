import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffInputPassword } from './input-password';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgffInputPassword', () => {
  let component: NgffInputPassword;
  let fixture: ComponentFixture<NgffInputPassword>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgffInputPassword, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgffInputPassword],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffInputPassword);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
