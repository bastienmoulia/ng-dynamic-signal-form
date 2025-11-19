import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffInputSearch } from './input-search';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgffInputSearch', () => {
  let component: NgffInputSearch;
  let fixture: ComponentFixture<NgffInputSearch>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgffInputSearch, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgffInputSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffInputSearch);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
