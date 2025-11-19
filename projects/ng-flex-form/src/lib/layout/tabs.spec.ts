import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgffTabs } from './tabs';

describe('NgffTabs', () => {
  let component: NgffTabs;
  let fixture: ComponentFixture<NgffTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgffTabs],
    }).compileComponents();

    fixture = TestBed.createComponent(NgffTabs);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('params', {
      tabs: [
        { id: 'tab1', label: 'Tab 1' },
        { id: 'tab2', label: 'Tab 2' },
      ],
    });
    fixture.detectChanges();
    
    expect(component).toBeTruthy();
  });

  it('should render all tabs', () => {
    fixture.componentRef.setInput('params', {
      tabs: [
        { id: 'tab1', label: 'Tab 1' },
        { id: 'tab2', label: 'Tab 2' },
        { id: 'tab3', label: 'Tab 3' },
      ],
    });
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement;
    const buttons = compiled.querySelectorAll('.tab-button');
    expect(buttons.length).toBe(3);
  });

  it('should set first tab as active by default', () => {
    fixture.componentRef.setInput('params', {
      tabs: [
        { id: 'tab1', label: 'Tab 1' },
        { id: 'tab2', label: 'Tab 2' },
      ],
    });
    fixture.detectChanges();
    
    expect(component.activeTab()).toBe('tab1');
  });

  it('should change active tab on click', () => {
    fixture.componentRef.setInput('params', {
      tabs: [
        { id: 'tab1', label: 'Tab 1' },
        { id: 'tab2', label: 'Tab 2' },
      ],
    });
    fixture.detectChanges();
    
    component.setActiveTab('tab2');
    expect(component.activeTab()).toBe('tab2');
  });
});
