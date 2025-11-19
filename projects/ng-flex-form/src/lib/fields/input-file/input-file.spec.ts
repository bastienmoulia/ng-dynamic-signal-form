import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffInputFile } from './input-file';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => null },
  });
}

describe('NgffInputFile', () => {
  let component: NgffInputFile;
  let fixture: ComponentFixture<NgffInputFile>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgffInputFile, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgffInputFile],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffInputFile);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
