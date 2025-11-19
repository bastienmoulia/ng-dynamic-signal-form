import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffFieldTemplate } from './field-template';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
  });
}

describe('NgffFieldTemplate', () => {
  let component: NgffFieldTemplate;
  let fixture: ComponentFixture<NgffFieldTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgffFieldTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffFieldTemplate);
    fixture.componentRef.setInput('field', mockField());
    fixture.componentRef.setInput('params', {});
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept className parameter', () => {
    const params = { className: 'custom-class' };
    fixture.componentRef.setInput('params', params);
    fixture.detectChanges();
    expect(component.params().className).toBe('custom-class');
  });
});
