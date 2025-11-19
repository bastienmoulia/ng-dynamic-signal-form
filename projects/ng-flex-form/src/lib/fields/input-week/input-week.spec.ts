import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffInputWeek } from './input-week';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgffInputWeek', () => {
  let component: NgffInputWeek;
  let fixture: ComponentFixture<NgffInputWeek>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgffInputWeek, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgffInputWeek],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffInputWeek);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
