import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffTextarea } from './textarea';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgffTextarea', () => {
  let component: NgffTextarea;
  let fixture: ComponentFixture<NgffTextarea>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgffTextarea, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgffTextarea],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffTextarea);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
