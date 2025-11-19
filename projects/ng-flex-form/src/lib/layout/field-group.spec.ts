import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffFieldGroup } from './field-group';

describe('NgffFieldGroup', () => {
  let component: NgffFieldGroup;
  let fixture: ComponentFixture<NgffFieldGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgffFieldGroup],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffFieldGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title when provided', () => {
    fixture.componentRef.setInput('params', { title: 'Personal Information' });
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('.field-group-title');
    expect(title?.textContent).toContain('Personal Information');
  });

  it('should render description when provided', () => {
    fixture.componentRef.setInput('params', { 
      title: 'Contact Details',
      description: 'Please provide your contact information' 
    });
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement;
    const description = compiled.querySelector('.field-group-description');
    expect(description?.textContent).toContain('Please provide your contact information');
  });
});
