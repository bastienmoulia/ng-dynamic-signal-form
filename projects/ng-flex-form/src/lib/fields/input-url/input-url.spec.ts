import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffInputUrl } from './input-url';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgffInputUrl', () => {
  let component: NgffInputUrl;
  let fixture: ComponentFixture<NgffInputUrl>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgffInputUrl, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgffInputUrl],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffInputUrl);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
