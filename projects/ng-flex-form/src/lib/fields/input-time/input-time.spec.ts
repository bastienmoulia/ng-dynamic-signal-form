import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffInputTime } from './input-time';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgffInputTime', () => {
  let component: NgffInputTime;
  let fixture: ComponentFixture<NgffInputTime>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgffInputTime, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgffInputTime],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffInputTime);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
